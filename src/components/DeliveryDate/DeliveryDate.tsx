import { useCallback } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import type { DeliveryDateDropdownOption } from "./DeliveryDate.types";

const MAX_DAYS = 7;

interface Props {
  onChange: (selected: DeliveryDateDropdownOption) => void;
}

export function DeliveryDate(props: Props) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const options: DeliveryDateDropdownOption[] = Array.from({ length: MAX_DAYS }, (_, i) => {
    const date = new Date(tomorrow);
    date.setDate(tomorrow.getDate() + i);
    const formattedDate = date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return {
      value: formattedDate,
      label: formattedDate,
      data: date,
    };
  });

  const handleChange = useCallback((value: string) => {
    const selectedOption = options.find(option => option.value === value);
    if (!selectedOption) return;
    props.onChange(selectedOption);
  }, [options, props]);

  return (
    <Dropdown options={options} onChange={handleChange} placeholder="配達日を選択してください" />
  );
}
