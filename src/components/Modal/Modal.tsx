import { FaXmark } from "react-icons/fa6";
// import { Button } from "../Button/Button";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./Modal.module.scss";
import { KeyboardEvent, useCallback, useEffect, useRef } from "react";
import { useKeyupFunction } from "../../hooks/useKeyupFunction";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

interface Props {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

function useFocus<T extends HTMLElement>() {
  const targetRef = useRef<T | null>(null);

  const focus = useCallback(() => {
    targetRef.current?.focus();
  }, []);

  return {
    targetRef,
    focus,
  }
}

export function Modal(props: Props) {
  const { targetRef, focus } = useFocus<HTMLButtonElement>();
  const { handleEscapeKey } = useKeyupFunction();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    focus();
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
    <div className={styles.overlay} onKeyUp={handleClose}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <SectionTitle text={props.title} />
          <ButtonIcon ref={targetRef} className={styles.close_button} onClick={props.onClose}>
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
