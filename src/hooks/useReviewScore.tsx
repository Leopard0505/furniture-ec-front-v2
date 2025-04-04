import { useState, useEffect } from 'react';
import { useQueryParams } from './useQueryParams';

interface ReviewScoreButton {
  text: string;
  value: string;
  pressed: boolean;
}

export const useReviewScore = () => {
  const { getQueryParamReviewScore } = useQueryParams();
  const [buttons, setButtons] = useState<ReviewScoreButton[]>([
    { text: '⭐️4.5〜', value: '4.5', pressed: false },
    { text: '⭐️4.0〜', value: '4.0', pressed: false },
    { text: '⭐️3.5〜', value: '3.5', pressed: false },
  ]);

  // URLパラメータの変更を監視
  const currentScore = getQueryParamReviewScore();

  useEffect(() => {
    if (currentScore) {
      setButtons(prevButtons =>
        prevButtons.map(button => ({
          ...button,
          pressed: button.value === currentScore,
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
  }, [currentScore]);

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
