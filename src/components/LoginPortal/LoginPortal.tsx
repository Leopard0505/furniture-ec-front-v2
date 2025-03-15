
import { Button } from '../Button/Button';
import { ButtonLink } from '../ButtonLink/ButtonLink';
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
          <div className={styles.login__portal__login__form__input_box}>
            <label className={styles.login__portal__login__form__label} htmlFor="">メールアドレス</label>
            <input
              className={styles.login__portal__login__form__input}
              type="text"
              placeholder='メールアドレスを入力してください'
              value={props.email}
              onChange={(e) => props.onChange({ email: e.target.value, password: props.password })}
            />
          </div>
          <div className={styles.login__portal__login__form__input_box}>
            <label className={styles.login__portal__login__form__label} htmlFor="">パスワード</label>
            <input
              className={styles.login__portal__login__form__input}
              type="text"
              placeholder='パスワードを入力してください'
              value={props.password}
              onChange={(e) => props.onChange({ email: props.email, password: e.target.value })}
            />
          </div>
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
