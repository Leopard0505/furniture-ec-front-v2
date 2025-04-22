import { z } from "zod";

const getMaxLength = (availablePoint: number): number => {
  const availablePointString = String(availablePoint);
  return availablePointString.length;
};

export const createPointAvailableSchema = (availablePoint: number) => {
  const maxLength = getMaxLength(availablePoint);
  return z.object({
    point: z
      .string()
      .max(maxLength, { message: `${maxLength}文字以内で入力してください。` })
      // .regex(/^[0-9]+$/, { message: "数字のみで入力してください。" })
      .refine(
        (value) => {
          const numberValue = Number(value);
          return numberValue <= availablePoint;
        },
        { message: `利用可能ポイントは${availablePoint}ptまでです。` }
      ),
  });
};
