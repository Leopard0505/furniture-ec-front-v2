import { useEffect, useState } from "react";
import { useQueryParams } from "../../shared/hooks/useQueryParams";

interface CategoryButton {
  text: string;
  value: string;
  pressed: boolean;
}

export const useCategory = () => {
  const { getQueryParamCategory } = useQueryParams();
  const [buttons, setButtons] = useState<CategoryButton[]>([
    { text: "スマホ", value: "smartphone", pressed: false },
    { text: "タブレット", value: "tablet", pressed: false },
    { text: "PC", value: "pc", pressed: false },
  ]);

  // URLパラメータの変更を監視
  const currentCategory = getQueryParamCategory();

  useEffect(() => {
    if (currentCategory) {
      setButtons((prevButtons) =>
        prevButtons.map((button) => ({
          ...button,
          pressed: button.value === currentCategory,
        }))
      );
    } else {
      setButtons((prevButtons) =>
        prevButtons.map((button) => ({
          ...button,
          pressed: false,
        }))
      );
    }
  }, [currentCategory]);

  const handleButtonClick = (value: string) => {
    setButtons((prevButtons) =>
      prevButtons.map((button) => ({
        ...button,
        pressed: button.value === value ? !button.pressed : false,
      }))
    );
  };

  const clear = () => {
    setButtons((prevButtons) =>
      prevButtons.map((button) => ({
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
