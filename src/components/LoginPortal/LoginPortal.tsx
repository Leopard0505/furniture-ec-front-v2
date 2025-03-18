
import { loginSchema, type FormInputs } from './schema';
import { Button } from '../Button/Button';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { InputField } from '../InputField/InputField';
import { InputPasswordField } from '../InputPasswordField/InputPasswordField';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import styles from './LoginPortal.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface LoginPortalProps {
  email: string;
  password: string;
  login: (username: string, password: string) => Promise<void>;
}

export function LoginPortal(props: LoginPortalProps) {
  const useFormMethods = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: props.email,
      password: props.password,
    }
  });

  const onSubmit = async (data: FormInputs) => {
    await props.login(data.username, data.password);
  }

  return (
    <div className={styles.login__portal}>
      <div className={styles.login__portal__login}>
        <SectionTitle text='ログイン' />
        <FormProvider {...useFormMethods}>
          <form className={styles.login__portal__login__form} onSubmit={useFormMethods.handleSubmit(onSubmit)}>
            <InputField name='username' label='ユーザー名' />
            <InputPasswordField name='password' label='パスワード' />
            <div className={styles.login__portal__login__forgot}>
              <a className={styles.login__portal__login__forgot_link} href="#">ユーザID・パスワードを忘れた場合</a>
            </div>
            <div>
              <Button type='submit' text='ログイン' />
            </div>
          </form>
        </FormProvider>
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
