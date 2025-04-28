import { customAlphabet } from "nanoid";

const ALPHABET = "0123456789";

function getRandomIntInclusive(): string {
  return customAlphabet(ALPHABET, 9)();
}

export function generateId(): string {
  // 正規表現でハイフンを挿入 123456789 -> 123-456-789
  return getRandomIntInclusive().replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3");
}
