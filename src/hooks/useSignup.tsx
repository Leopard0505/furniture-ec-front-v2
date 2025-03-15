import { useState } from "react";

export const useSignup = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [namekana, setNamekana] = useState<string>('');
  const [phonenumber, setPhonenumber] = useState<string>('');
  const [postcode, setPostcode] = useState<string>('');
  const [prefecture, setPrefecture] = useState<string>('');
  const [municipality, setMunicipality] = useState<string>('');
  const [ding, setDing] = useState<string>('');
  const [buildname, setBuildname] = useState<string>('');
  const [roomname, setRoomname] = useState<string>('');

  const signup = (): Promise<void> => {
    console.log('signup', { email, password, name, namekana, phonenumber, postcode, prefecture, municipality, ding, buildname, roomname });
    return Promise.resolve();
  }

  return {
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
  };
}
