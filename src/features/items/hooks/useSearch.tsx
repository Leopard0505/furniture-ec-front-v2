import { useState } from "react";


export const useSearch = () => {
  const [word, setWord] = useState<string>('');

  const search = (): Promise<void> => {
    console.log('search', { word });
    return Promise.resolve();
  }

  return {
    word,
    setWord,
    search,
  };
}
