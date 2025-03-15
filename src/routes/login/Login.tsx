import { LoginPortal } from "../../components/LoginPortal/LoginPortal";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const { email, password, setEmail, setPassword, login } = useLogin();

  return (
    <LoginPortal
      email={email}
      password={password}
      onChange={(e) => {
        setEmail(e.email);
        setPassword(e.password);
      }}
      login={login}
    />
  )
}
