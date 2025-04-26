import { type KeyboardEvent, useCallback, useState, type ReactElement } from 'react';
import styles from './CancelPolicy.module.scss';
import { ModalCancelPolicy } from '../ModalCancelPolicy/ModalCancelPolicy';
import { useKeyupFunction } from '../../hooks/useKeyupFunction';
import classNames from 'classnames';

interface Props {
  readonly className?: string;
};

export function CancelPolicy(props: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const { IsKey } = useKeyupFunction();

  const handleRequestClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLElement>) => {
    IsKey(e.nativeEvent, ['Enter'], () => setIsOpen(true));
  }, [IsKey]);

  return (
    <>
      <a
        className={classNames(styles.cancel__policy, props.className)}
        role="link"
        tabIndex={0}
        aria-label="キャンセル・ポリシーについて"
        onClick={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
      >
        キャンセル・ポリシーについて
      </a>
      <ModalCancelPolicy isOpen={isOpen} onRequestClose={handleRequestClose} />
    </>
  );
};
