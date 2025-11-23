import { useCallback, useMemo } from "react";
import { Dropdown } from "../../../shared/components/Dropdown/Dropdown";
import { DropdownOption } from "../../../shared/components/Dropdown/Dropdown.types";

interface Props {
  onChange: (selected: string) => void;
}

export function DeliveryTime(props: Props) {
  const options: DropdownOption[] = useMemo(() =>[
    { value: "09:00-11:00", label: "09:00-11:00" },
    { value: "11:00-13:00", label: "11:00-13:00" },
    { value: "13:00-15:00", label: "13:00-15:00" },
    { value: "15:00-17:00", label: "15:00-17:00" },
    { value: "17:00-19:00", label: "17:00-19:00" },
    { value: "19:00-21:00", label: "19:00-21:00" },
  ], []);

  const handleChange = useCallback((value: string) => {
    const selectedOption = options.find(option => option.value === value);
    if (!selectedOption) return;
    props.onChange(value);
  }, [options, props]);


  return (
    <Dropdown options={options} onChange={handleChange} placeholder="配達時間を選択してください" />
  )
}
