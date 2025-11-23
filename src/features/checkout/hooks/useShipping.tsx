import { useState, useEffect } from 'react';
import { useQueryParams } from '../../shared/hooks/useQueryParams';

interface ShippingButton {
  text: string;
  value: string;
  pressed: boolean;
}

export const useShipping = () => {
  const { getQueryParamShipping } = useQueryParams();
  const [buttons, setButtons] = useState<ShippingButton[]>([
    { text: '送料無料のみ表示', value: 'free_shipping', pressed: false },
  ]);

  // URLパラメータの変更を監視
  const currentShipping = getQueryParamShipping();

  useEffect(() => {
    if (currentShipping) {
      setButtons(prevButtons =>
        prevButtons.map(button => ({
          ...button,
          pressed: button.value === currentShipping,
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
  }, [currentShipping]);

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
