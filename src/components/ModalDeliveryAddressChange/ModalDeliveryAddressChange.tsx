import { useCallback } from "react";
import { Form } from "../Form/Form";
import { InputField } from "../InputField/InputField";
import { Modal } from "../Modal/Modal";
import { Portal } from "../Portal/Portal";
// import styles from "./ModalDeliveryAddressChange.module.scss";
import { deliveryAddressChangeSchema, FormInputs } from "./schema";

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: () => void;
}

export function ModalDeliveryAddressChange(props: Props) {
  const defaultValues = {
    name: "山田太郎",
    phonenumber: "090-1234-5678",
    postcode: "000-0000",
    prefecture: "東京都",
    municipality: "千代田区",
    ding: "1-1-1",
    buildname: "東京ビル",
    roomname: "101",
  };

  const handleSubmit = useCallback((data: FormInputs) => {
    console.log('data', data);
    props.onSubmit();
  }, [props]);

  if (!props.isOpen) {
    return <></>;
  }

  return (
    <Portal>
      <Modal
        title="お届け先の変更"
        onClose={props.onRequestClose}
      >
        <Form<FormInputs>
          schema={deliveryAddressChangeSchema}
          defaultValues={defaultValues}
          submitButtonText="変更する"
          onSubmit={handleSubmit}
        >
          <InputField label='氏名' name='name' />
          <InputField label='電話番号' name='phonenumber' />
          <InputField label='郵便番号（半角数字）' name='postcode' />
          <InputField label='都道府県' name='prefecture' />
          <InputField label='市区町村' name='municipality' />
          <InputField label='丁目・番地・号（数字は半角数字）' name='ding' />
          <InputField label='建物名' name='buildname' />
          <InputField label='部屋番号（数字は半角数字）' name='roomname' />
        </Form>
      </Modal>
    </Portal>
  );
}
