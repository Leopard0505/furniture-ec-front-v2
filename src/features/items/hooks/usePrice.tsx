import { useState, useEffect } from 'react';
import { useQueryParams } from '../../shared/hooks/useQueryParams';

interface PriceState {
  min: string;
  max: string;
}

export const usePrice = () => {
  const { getQueryParamMinPrice, getQueryParamMaxPrice } = useQueryParams();
  const [price, setPrice] = useState<PriceState>({
    min: '',
    max: '',
  });

  const currentMinPrice = getQueryParamMinPrice();
  const currentMaxPrice = getQueryParamMaxPrice();

  useEffect(() => {
    setPrice({
      min: currentMinPrice || '',
      max: currentMaxPrice || '',
    });
  }, [currentMinPrice, currentMaxPrice]);

  const handleMinPriceChange = (value: string) => {
    setPrice(prev => ({
      ...prev,
      min: value,
    }));
  };

  const handleMaxPriceChange = (value: string) => {
    setPrice(prev => ({
      ...prev,
      max: value,
    }));
  };

  const clear = () => {
    setPrice({
      min: '',
      max: '',
    });
  };

  return {
    price,
    handleMinPriceChange,
    handleMaxPriceChange,
    clear,
  };
};
