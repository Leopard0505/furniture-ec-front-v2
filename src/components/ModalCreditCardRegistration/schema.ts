import { z } from "zod";

export interface FormInputs {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  securityCode: string;
  country: string;
}

const cardNumber = z
  .string()
  .min(16, { message: "クレジットカード番号が無効です" })
  .max(16, { message: "クレジットカード番号が無効です" })
  .regex(/^[0-9]+$/, "クレジットカード番号が無効です");
const cardHolder = z.string().min(1, "カード名義を入力してください");
const expirationDate = z.string().min(1, "必須です");
const securityCode = z
  .string()
  .min(3)
  .max(4)
  .regex(/^[0-9]+$/, "セキュリティコードが無効です");
const country = z.string().min(1, "必須です");

export const creditCardRegistrationSchema = z.object({
  cardNumber,
  cardHolder,
  expirationDate,
  securityCode,
  country,
});
