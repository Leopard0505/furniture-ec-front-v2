import { z } from "zod";

export interface FormInputs {
  name: string;
  phonenumber: string;
  postcode: string;
  prefecture: string;
  municipality: string;
  ding: string;
  buildname: string;
  roomname: string;
}

const name = z.string().min(1, "必須です");
const phonenumber = z.string().min(1, "必須です");
const postcode = z.string().min(1, "必須です");
const prefecture = z.string().min(1, "必須です");
const municipality = z.string().min(1, "必須です");
const ding = z.string().min(1, "必須です");
const buildname = z.string().min(1, "必須です");
const roomname = z.string().min(1, "必須です");

export const deliveryAddressChangeSchema = z.object({
  name,
  phonenumber,
  postcode,
  prefecture,
  municipality,
  ding,
  buildname,
  roomname,
});
