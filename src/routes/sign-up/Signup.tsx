import { SignupPortal } from "../../components/SignupPortal/SignupPortal";
import { useSignup } from "../../hooks/useSignup";

export function Signup() {
  const {
    email,
    password,
    name,
    namekana,
    phonenumber,
    postcode,
    prefecture,
    municipality,
    ding,
    buildname,
    roomname,
    signup,
  } = useSignup();

  return (
    <SignupPortal
      email={email}
      password={password}
      name={name}
      namekana={namekana}
      phonenumber={phonenumber}
      postcode={postcode}
      prefecture={prefecture}
      municipality={municipality}
      ding={ding}
      buildname={buildname}
      roomname={roomname}
      signup={signup}
    />
  );
}
