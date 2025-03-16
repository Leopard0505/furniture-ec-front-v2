import { useState } from "react";

type InputType = "text" | "password";

export const usePassword = () => {
  const [type, setType] = useState<InputType>('password');

  const handleToggleType = () => {
    setType(type !== 'text' ? 'text' : 'password');
  };

  return {
    type,
    handleToggleType
  };
}
