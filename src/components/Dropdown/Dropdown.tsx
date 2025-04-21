import { useRef, useState } from "react";
import styles from "./Dropdown.module.scss";
import { DropdownOption } from "./Dropdown.types";
import { useKeyupFunction } from "../../hooks/useKeyupFunction";
import { useAutoFocus } from "../../hooks/useAutoFocus";

interface Props {
  options: DropdownOption[];
  onChange: (value: string) => void;
  placeholder?: string;
}

export function Dropdown({ options, onChange, placeholder = "選択してください" }: Props) {
  const targetRef = useRef<HTMLUListElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const { handleEscapeKey } = useKeyupFunction();
  useAutoFocus<HTMLUListElement>(targetRef);

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
        <ul className={styles.dropdown__menu} ref={targetRef} tabIndex={0} onKeyUp={(e) => handleEscapeKey(e, () => setIsOpen(false))}>
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
