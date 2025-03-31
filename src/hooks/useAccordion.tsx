import { useEffect, useState } from "react";
import classNames from "classnames";

export const useAccordion = (className: string, openClassName: string) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [convertClassName, setConvertClassName] = useState<string>(className);

  const handleClickAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setConvertClassName(classNames(className, isOpen ? openClassName : null));
  }, [isOpen, className, openClassName]);

  return {
    convertClassName,
    handleClickAccordion,
  };
}
