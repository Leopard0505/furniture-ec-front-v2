
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../Button/Button';
import { InputField } from '../InputField/InputField';
import { InputPasswordField } from '../InputPasswordField/InputPasswordField';
import { SectionTitle } from '../SectionTitle/SectionTitle';

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
    name: string,
    namekana: string,
    phonenumber: string,
    postcode: string,
    prefecture: string,
    municipality: string,
    ding: string,
    buildname: string,
    roomname: string,
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
      data.name,
      data.namekana,
      data.phonenumber,
      data.postcode,
      data.prefecture,
      data.municipality,
      data.ding,
      data.buildname,
      data.roomname
    );
  }

  return (
    <div className={styles.signup__portal}>
      <SectionTitle text="会員登録" />
      <FormProvider {...useFormMethods}>
        <form onSubmit={useFormMethods.handleSubmit(onSubmit)}>
          <InputField label='メールアドレス' name='username' />
          <InputPasswordField label='パスワード' name='password' />
          <InputField label='氏名' name='name' />
          <InputField label='氏名（フリガナ）' name='namekana' />
          <InputField label='電話番号' name='phonenumber' />
          <InputField label='郵便番号（半角数字）' name='postcode' />
          <InputField label='都道府県' name='prefecture' />
          <InputField label='市区町村' name='municipality' />
          <InputField label='丁目・番地・号（数字は半角数字）' name='ding' />
          <InputField label='建物名' name='buildname' />
          <InputField label='部屋番号（数字は半角数字）' name='roomname' />
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
