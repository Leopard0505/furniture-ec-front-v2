import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { RadioType } from "../Radio/Radio";
import { RadioGroup } from "../RadioGroup/RadioGroup";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./CheckoutPointAvailable.module.scss";
import { InputField } from "../InputField/InputField";
import { createPointAvailableSchema } from "./schema";
import { ZodError } from "zod";

export function CheckoutPointAvailable() {
  const [selectedOption, setSelectedOption] = useState<RadioType | null>(null);
  // TODO: 1200 はAPIから取得した値を使用する
  const [pointAvailable,] = useState<number>(1200);
  const [point, setPoint] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const schema = useMemo(() => createPointAvailableSchema(pointAvailable), [pointAvailable]);
  const options: RadioType[] = [
    { id: "利用しない", checked: false, label: "利用しない" },
    { id: "すべて利用する", checked: false, label: "すべて利用する" },
    { id: "一部のみ利用する", checked: false, label: "一部のみ利用する" },
  ];

  const handleInputUsePoint = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    try {
      setErrors([]);
      const { point } = schema.parse({ point: e.target.value });
      setPoint(point)
    } catch (error) {
      if (error instanceof ZodError) {
        setErrors(error.errors.map((err) => err.message));
      }
    }
  }, [schema]);

  return (
    <div className={styles.wrapper}>
      <SectionTitle text='ご利用可能なポイント' />
      <div>利用可能ポイント 1,200pt</div>
      <RadioGroup
        name="point-available"
        options={options}
        onChangeSelectOption={setSelectedOption}
      />
      <InputField
        className={styles.input__field}
        value={point}
        onChange={handleInputUsePoint}
        type="text"
        name="利用するポイント数"
        placeholder="0"
        disabled={selectedOption?.id !== "一部のみ利用する"}
        errors={errors}
      />
    </div>
  );
}
