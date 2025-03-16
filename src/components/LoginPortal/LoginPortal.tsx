
import { Button } from '../Button/Button';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { InputField } from '../InputField/InputField';
import { InputPasswordField } from '../InputPasswordField/InputPasswordField';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import styles from './LoginPortal.module.scss';

interface LoginPortalProps {
  email: string;
  password: string;
  onChange: (args: { email: string, password: string }) => void;
  login: () => Promise<void>;
}

export function LoginPortal(props: LoginPortalProps) {

  return (
    <div className={styles.login__portal}>
      <div className={styles.login__portal__login}>
        <SectionTitle text='ログイン' />
        <div className={styles.login__portal__login__form}>
          <InputField text='メールアドレス' value={props.email} onChange={(value) => props.onChange({ email: value, password: props.password })} />
          <InputPasswordField text='パスワード' value={props.password} onChange={(value) => props.onChange({ email: props.email, password: value })} />
          <div className={styles.login__portal__login__forgot}>
            <a className={styles.login__portal__login__forgot_link} href="#">ユーザID・パスワードを忘れた場合</a>
          </div>
          <div>
            <Button text='ログイン' onClick={() => props.login()} />
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.login__portal__to_new_user}>
        <SectionTitle text='会員登録がまだの方はこちら' />
        <div className={styles.login__portal__login__form}>
          <ButtonLink to='/sign-up' text='新規会員登録（無料）' />
        </div>
      </div>
    </div>
  );
}
