import { z } from "zod";

export interface FormInputs {
  username: string;
  password: string;
}

const username = z.string().min(1, "名前は必須です");
const password = z
  .string()
  .min(8, "8文字以上である必要があります")
  .max(16, "16文字以内である必要があります");

export const loginSchema = z.object({
  username: username,
  password: password,
});
