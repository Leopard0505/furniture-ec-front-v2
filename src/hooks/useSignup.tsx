import { useState } from "react";
import { useApiAuth } from "../api/auth";
import { usePageNavigate } from "./usePageNavigate";
import { useAccessToken } from "./useAccessToken";

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

  const { authSignupApi, authLoginApi } = useApiAuth();
  const { toTopNavigate } = usePageNavigate();
  const { setToken } = useAccessToken();

  const signup = async (
    username: string,
    password: string,
    name: string,
    namekana: string,
    phonenumber: string,
    postcode: string,
    prefecture: string,
    municipality: string,
    ding: string,
    buildname: string,
    roomname: string,
  ): Promise<void> => {
    try {
      await authSignupApi(username, password);
      const { access_token } = await authLoginApi(username, password);

      setToken(access_token);

      toTopNavigate();
    } catch (error) {
      // TODO: フロントで制御したいことがあれば書く
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
