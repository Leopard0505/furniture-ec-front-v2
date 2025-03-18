import { z } from "zod";

export interface FormInputs {
  username: string;
  password: string;
  name: string;
  namekana: string;
  phonenumber: string;
  postcode: string;
  prefecture: string;
  municipality: string;
  ding: string;
  buildname: string;
  roomname: string;
}

const username = z.string().min(1, "必須です");
const password = z
  .string()
  .min(8, "8文字以上である必要があります")
  .max(16, "16文字以内である必要があります");
const name = z.string().min(1, "必須です");
const namekana = z.string().min(1, "必須です");
const phonenumber = z.string().min(1, "必須です");
const postcode = z.string().min(1, "必須です");
const prefecture = z.string().min(1, "必須です");
const municipality = z.string().min(1, "必須です");
const ding = z.string().min(1, "必須です");
const buildname = z.string().min(1, "必須です");
const roomname = z.string().min(1, "必須です");

export const signupSchema = z.object({
  username: username,
  password: password,
  name,
  namekana,
  phonenumber,
  postcode,
  prefecture,
  municipality,
  ding,
  buildname,
  roomname,
});
