import { SignupPortal } from "../../components/SignupPortal/SignupPortal";
import { useSignup } from "../../hooks/useSignup";

export function Signup() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    namekana,
    setNamekana,
    phonenumber,
    setPhonenumber,
    postcode,
    setPostcode,
    prefecture,
    setPrefecture,
    municipality,
    setMunicipality,
    ding,
    setDing,
    buildname,
    setBuildname,
    roomname,
    setRoomname,
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
      onChange={({ email, password, name, namekana, phonenumber, postcode, prefecture, municipality, ding, buildname, roomname }) => {
        if (email !== undefined) setEmail(email);
        if (password !== undefined) setPassword(password);
        if (name !== undefined) setName(name);
        if (namekana !== undefined) setNamekana(namekana);
        if (phonenumber !== undefined) setPhonenumber(phonenumber);
        if (postcode !== undefined) setPostcode(postcode);
        if (prefecture !== undefined) setPrefecture(prefecture);
        if (municipality !== undefined) setMunicipality(municipality);
        if (ding !== undefined) setDing(ding);
        if (buildname !== undefined) setBuildname(buildname);
        if (roomname !== undefined) setRoomname(roomname);
      }}
      signup={signup}
    />
  );
}
