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
        if (email) setEmail(email);
        if (password) setPassword(password);
        if (name) setName(name);
        if (namekana) setNamekana(namekana);
        if (phonenumber) setPhonenumber(phonenumber);
        if (postcode) setPostcode(postcode);
        if (prefecture) setPrefecture(prefecture);
        if (municipality) setMunicipality(municipality);
        if (ding) setDing(ding);
        if (buildname) setBuildname(buildname);
        if (roomname) setRoomname(roomname);
      }}
      signup={signup}
    />
  );
}
