/**
 * 与えられた数値を日本円の通貨文字列として整形する。
 *
 * @param price - フォーマットする数値。
 * @returns フォーマットされた通貨を「JPY」で表す文字列。
 */
export const formattedPrice = (price: number) => {
  return price.toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
  });
};
