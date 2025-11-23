import { useCallback } from "react";
import { Form } from "../../../shared/components/Form/Form";
import { FormInputField } from "../../../shared/components/FormInputField/FormInputField";
import { Modal } from "../../../shared/components/Modal/Modal";
import { Portal } from "../../../shared/components/Portal/Portal";
import { creditCardRegistrationSchema, FormInputs } from "./schema";

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: (data: FormInputs) => void;
}

export function ModalCreditCardRegistration(props: Props) {
  const defaultValues = {
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
    securityCode: "",
    country: "",
  };

  const handleSubmit = useCallback((data: FormInputs) => {
    // クレジットカード登録APIを呼び出す
    // 成功したら、モーダルを閉じる
    // 失敗したら、エラーメッセージを表示する
    props.onSubmit(data);
  }, [props]);

  if (!props.isOpen) {
    return <></>;
  }

  return (
    <Portal>
      <Modal
        title="クレジットカード登録"
        onClose={props.onRequestClose}
      >
        <Form<FormInputs>
          defaultValues={defaultValues}
          schema={creditCardRegistrationSchema}
          onSubmit={handleSubmit}
        >
          <FormInputField role="cardNumber" name="cardNumber" label="クレジットカード番号" />
          <FormInputField role="cardHolder" name="cardHolder" label="カード名義" />
          <FormInputField role="expirationDate" name="expirationDate" label="有効期限（月/年）" />
          <FormInputField role="securityCode" name="securityCode" label="セキュリティコード" />
          <FormInputField role="country" name="country" label="国または地域" />
        </Form>
      </Modal>
    </Portal>
  );
}
