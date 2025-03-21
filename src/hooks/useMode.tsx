import { useEffect } from "react";

export const useMode = () => {
  useEffect(() => {
    console.log(
      import.meta.env.MODE,
      { ...import.meta.env }
    )
  }, []);

  return {};
}
