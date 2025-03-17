import { useState } from "react";
import { authLoginApi, authSignupApi } from "../api/auth";
import { usePageNavigate } from "./usePageNavigate";

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

  const { toTopNavigate } = usePageNavigate();

  const signup = async (): Promise<void> => {
    try {
      console.log('signup', { email, password, name, namekana, phonenumber, postcode, prefecture, municipality, ding, buildname, roomname });
      await authSignupApi(email, password);
      const response = await authLoginApi(email, password);
      console.log('reponse', response);

      // TODO: 認証情報をstoreに保持する

      toTopNavigate();
    } catch (error) {
      alert(error);
      // TODO: エラーハンドリング
    }
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
