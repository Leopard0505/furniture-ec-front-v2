import { useState, useEffect } from 'react';
import { useQueryParams } from '../../shared/hooks/useQueryParams';

interface ProductConditionButton {
  text: string;
  value: string;
  pressed: boolean;
}

export const useProductCondition = () => {
  const { getQueryParamCondition } = useQueryParams();
  const [buttons, setButtons] = useState<ProductConditionButton[]>([
    { text: '新品', value: 'new', pressed: false },
    { text: '中古', value: 'used', pressed: false },
    { text: 'レンタル', value: 'rental', pressed: false },
  ]);

  // URLパラメータの変更を監視
  const currentCondition = getQueryParamCondition();

  useEffect(() => {
    if (currentCondition) {
      setButtons(prevButtons =>
        prevButtons.map(button => ({
          ...button,
          pressed: button.value === currentCondition,
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
  }, [currentCondition]);

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
