
import { Button } from '../Button/Button';
import { InputField } from '../InputField/InputField';
import { InputPasswordField } from '../InputPasswordField/InputPasswordField';
import { SectionTitle } from '../SectionTitle/SectionTitle';

import styles from './SignupPortal.module.scss';

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
  onChange: (args: { email?: string, password?: string, name?: string, namekana?: string, phonenumber?: string, postcode?: string, prefecture?: string, municipality?: string, ding?: string, buildname?: string, roomname?: string }) => void;
  signup: () => Promise<void>;
}

export function SignupPortal(props: SignupPortalProps) {

  return (
    <div className={styles.signup__portal}>
      <SectionTitle text="会員登録" />
      <div>
        <InputField text='メールアドレス' value={props.email} onChange={(value) => props.onChange({ email: value })} />
        <InputPasswordField text='パスワード' value={props.password} onChange={(value) => props.onChange({ password: value })} />
        <InputField text='氏名' value={props.name} onChange={(value) => props.onChange({ name: value })} />
        <InputField text='氏名（フリガナ）' value={props.namekana} onChange={(value) => props.onChange({ namekana: value })} />
        <InputField text='電話番号' value={props.phonenumber} onChange={(value) => props.onChange({ phonenumber: value })} />
        <InputField text='郵便番号（半角数字）' value={props.postcode} onChange={(value) => props.onChange({ postcode: value })} />
        <InputField text='都道府県' value={props.prefecture} onChange={(value) => props.onChange({ prefecture: value })} />
        <InputField text='市区町村' value={props.municipality} onChange={(value) => props.onChange({ municipality: value })} />
        <InputField text='丁目・番地・号（数字は半角数字）' value={props.ding} onChange={(value) => props.onChange({ ding: value })} />
        <InputField text='建物名' value={props.buildname} onChange={(value) => props.onChange({ buildname: value })} />
        <InputField text='部屋番号（数字は半角数字）' value={props.roomname} onChange={(value) => props.onChange({ roomname: value })} />
        <div className={styles.signup__portal__agree}>
          <a className={styles.signup__portal__agree_link} href="#">規約および個人情報保護方針への同意が必要です。</a>
        </div>
        <div>
          <Button text='同意して次へ' onClick={() => props.signup()} />
        </div>
      </div>
    </div>
  );
}
