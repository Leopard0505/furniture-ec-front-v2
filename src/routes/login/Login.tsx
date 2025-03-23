import { LoginPortal } from "../../components/LoginPortal/LoginPortal";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const { email, password, login } = useLogin();

  return (
    <LoginPortal
      email={email}
      password={password}
      login={login}
    />
  )
}
