function getRandomIntInclusive(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 上限を含み、下限も含む
}

export function generateId(): string {
  // 正規表現でハイフンを挿入 123456789 -> 123-456-789
  return getRandomIntInclusive(100000000, 999999999)
    .toString()
    .replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3");
}
