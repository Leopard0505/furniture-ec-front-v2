import { useState } from "react";
import styles from "./Dropdown.module.scss";
import { DropdownOption } from "./Dropdown.types";

interface Props {
  options: DropdownOption[];
  onChange: (value: string) => void;
  placeholder?: string;
}

export function Dropdown({ options, onChange, placeholder = "選択してください" }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdown__selected}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected ? options.find((option) => option.value === selected)?.label : placeholder}
      </div>
      {isOpen && (
        <ul className={styles.dropdown__menu}>
          {options.map((option) => (
            <li
              key={option.value}
              className={styles.dropdown__item}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
