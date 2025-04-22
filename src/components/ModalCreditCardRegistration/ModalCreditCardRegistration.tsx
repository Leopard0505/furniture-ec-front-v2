import { useCallback } from "react";
import { Form } from "../Form/Form";
import { FormInputField } from "../FormInputField/FormInputField";
import { Modal } from "../Modal/Modal";
import { Portal } from "../Portal/Portal";
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
          <FormInputField name="cardNumber" label="クレジットカード番号" />
          <FormInputField name="cardHolder" label="カード名義" />
          <FormInputField name="expirationDate" label="有効期限（月/年）" />
          <FormInputField name="securityCode" label="セキュリティコード" />
          <FormInputField name="country" label="国または地域" />
        </Form>
      </Modal>
    </Portal>
  );
}
