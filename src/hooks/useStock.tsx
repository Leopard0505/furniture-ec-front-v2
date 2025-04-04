import { useState, useEffect } from 'react';
import { useQueryParams } from './useQueryParams';

interface StockButton {
  text: string;
  value: string;
  pressed: boolean;
}

export const useStock = () => {
  const { getQueryParamStock } = useQueryParams();
  const [buttons, setButtons] = useState<StockButton[]>([
    { text: '在庫ありのみ表示', value: 'in_stock', pressed: false },
  ]);

  // URLパラメータの変更を監視
  const currentStock = getQueryParamStock();

  useEffect(() => {
    if (currentStock) {
      setButtons(prevButtons =>
        prevButtons.map(button => ({
          ...button,
          pressed: button.value === currentStock,
        }))
      );
    } else {
      setButtons(prevButtons =>
        prevButtons.map(button => ({
          ...button,
          pressed: false,
        }))
      );
    }
  }, [currentStock]);

  const handleButtonClick = (value: string) => {
    setButtons(prevButtons =>
      prevButtons.map(button => ({
        ...button,
        pressed: button.value === value ? !button.pressed : false,
      }))
    );
  };

  const clear = () => {
    setButtons(prevButtons =>
      prevButtons.map(button => ({
        ...button,
        pressed: false,
      }))
    );
  };

  return {
    buttons,
    handleButtonClick,
    clear,
  };
};
