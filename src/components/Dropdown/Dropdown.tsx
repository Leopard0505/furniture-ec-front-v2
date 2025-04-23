import { useRef, useState } from "react";
import styles from "./Dropdown.module.scss";
import { DropdownOption } from "./Dropdown.types";
import { useKeyupFunction } from "../../hooks/useKeyupFunction";
import { nextFocus, prevFocus } from "./focus";

interface Props {
  options: DropdownOption[];
  onChange: (value: string) => void;
  placeholder?: string;
}

export function Dropdown({ options, onChange, placeholder = "選択してください" }: Props) {
  const targetRef = useRef<HTMLUListElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const { handleEnterKey, handleEscapeKey, handleTabKey, handleArrowUpKey, handleArrowDownKey } = useKeyupFunction();

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown} role="combobox" aria-expanded={isOpen} aria-haspopup="listbox">
      <div
        className={styles.dropdown__selected}
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={(e => handleEnterKey(e, () => setIsOpen((prev) => !prev)))}
      >
        {selected ? options.find((option) => option.value === selected)?.label : placeholder}
      </div>
      {isOpen && (
        <ul
          className={styles.dropdown__menu}
          ref={targetRef}
          tabIndex={0}
          role="list"
          onKeyDown={(e) => {
            handleArrowUpKey(e, () => prevFocus(targetRef));
            handleArrowDownKey(e, () => nextFocus(targetRef));
            handleTabKey(e, () => nextFocus(targetRef));
            handleEscapeKey(e, () => setIsOpen(false));
          }}
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={selected === option.value}
              tabIndex={0}
              className={styles.dropdown__item}
              onClick={() => handleSelect(option.value)}
              onKeyDown={(e) => {
                handleEnterKey(e, () => handleSelect(option.value));
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
