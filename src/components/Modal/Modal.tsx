import { FaXmark } from "react-icons/fa6";
// import { Button } from "../Button/Button";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./Modal.module.scss";
import { KeyboardEvent, useCallback, useEffect, useRef } from "react";
import { useKeyupFunction } from "../../hooks/useKeyupFunction";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { useAutoFocus } from "../../hooks/useAutoFocus";

interface Props {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal(props: Props) {
  const targetRef = useRef<HTMLButtonElement | null>(null);
  useAutoFocus<HTMLButtonElement>(targetRef);
  const { handleEscapeKey } = useKeyupFunction();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    }
  });

  const handleClose = useCallback((e: KeyboardEvent) => {
    handleEscapeKey(e, () => {
      props.onClose();
    });
  }, [handleEscapeKey, props]);

  return (
    <div className={styles.overlay} role="overlay" onKeyUp={handleClose}>
      <div className={styles.modal} role="modal" aria-modal="true">
        <div className={styles.header}>
          <SectionTitle text={props.title} />
          <ButtonIcon ref={targetRef} role="close-button" className={styles.close_button} onClick={props.onClose}>
            <FaXmark size={24} />
          </ButtonIcon>
        </div>
        <div className={styles.content}>
          {props.children}
        </div>
        {/* <div className={styles.footer}>
          <Button text="キャンセル" onClick={props.onClose} white />
          <Button text="変更する" onClick={props.onSubmit} />
        </div> */}
      </div>
    </div>
  );
}
