
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../shared/components/Button/Button';
import { FormInputField } from '../../../shared/components/FormInputField/FormInputField';
import { FormInputPasswordField } from '../../../shared/components/FormInputPasswordField/FormInputPasswordField';
import { SectionTitle } from '../../../shared/components/SectionTitle/SectionTitle';

import styles from './SignupPortal.module.scss';
import { FormInputs, signupSchema } from './schema';

interface SignupPortalProps {
  email: string;
  password: string;
  name: string;
  namekana: string;
  phonenumber: string;
  postcode: string;
  prefecture: string;
  municipality: string;
  ding: string;
  buildname: string;
  roomname: string;
  signup: (
    username: string,
    password: string,
  ) => Promise<void>;
}

export function SignupPortal(props: SignupPortalProps) {
  const useFormMethods = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: props.email,
      password: props.password,
    }
  });

  const onSubmit = async (data: FormInputs) => {
    await props.signup(
      data.username,
      data.password,
    );
  }

  return (
    <div className={styles.signup__portal}>
      <SectionTitle text="会員登録" />
      <FormProvider {...useFormMethods}>
        <form onSubmit={useFormMethods.handleSubmit(onSubmit)}>
          <FormInputField label='メールアドレス' name='username' />
          <FormInputPasswordField label='パスワード' name='password' />
          <FormInputField label='氏名' name='name' />
          <FormInputField label='氏名（フリガナ）' name='namekana' />
          <FormInputField label='電話番号' name='phonenumber' />
          <FormInputField label='郵便番号（半角数字）' name='postcode' />
          <FormInputField label='都道府県' name='prefecture' />
          <FormInputField label='市区町村' name='municipality' />
          <FormInputField label='丁目・番地・号（数字は半角数字）' name='ding' />
          <FormInputField label='建物名' name='buildname' />
          <FormInputField label='部屋番号（数字は半角数字）' name='roomname' />
          <div className={styles.signup__portal__agree}>
            <a className={styles.signup__portal__agree_link} href="#">規約および個人情報保護方針への同意が必要です。</a>
          </div>
          <div>
            <Button type='submit' text='同意して次へ' />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
