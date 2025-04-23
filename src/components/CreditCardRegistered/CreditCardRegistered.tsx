
import { useCallback, useMemo, useState } from "react";
import { Button } from "../Button/Button";
import { ModalCreditCardRegistration } from "../ModalCreditCardRegistration/ModalCreditCardRegistration";
import styles from "./CreditCardRegistered.module.scss";
import { CreditCard } from "./CreditCardRegistered.types";
import { FormInputs } from "../ModalCreditCardRegistration/schema";

interface Props {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
}

export function CreditCardRegistered(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [creditCard, setCreditCard] = useState<CreditCard>({ ...props });

  const hasCreditCard = useMemo(() => {
    return !!creditCard.cardNumber && !!creditCard.cardHolder && !!creditCard.expirationDate;
  }, [creditCard]);

  const handleCreditCardRegistration = useCallback((data: FormInputs) => {
    setCreditCard({
      cardNumber: data.cardNumber,
      cardHolder: data.cardHolder,
      expirationDate: data.expirationDate,
    });
    setIsOpen(false);
  }, []);

  const renderCreditCardInfo = useMemo(() => {
    if (!hasCreditCard) {
      return <Button text="クレジットカードを登録する" white onClick={() => setIsOpen(true)} />;
    }
    return (
      <>
        <div className={styles.card__info}>
          <div className={styles.card__info__number}>
            <span>カード番号:</span>
            <span>{creditCard?.cardNumber}</span>
          </div>
          <div className={styles.card__info__holder}>
            <span>カード名義:</span>
            <span>{creditCard?.cardHolder}</span>
          </div>
          <div className={styles.card__info__expiration}>
            <span>有効期限:</span>
            <span>{creditCard?.expirationDate}</span>
          </div>
        </div>
        <Button text="変更する" white onClick={() => setIsOpen(true)} />
      </>
    );
  }, [hasCreditCard, creditCard]);

  return (
    <div className={styles.wrapper}>
      {renderCreditCardInfo}
      <ModalCreditCardRegistration isOpen={isOpen} onRequestClose={() => setIsOpen(false)} onSubmit={handleCreditCardRegistration} />
    </div>
  );
}
