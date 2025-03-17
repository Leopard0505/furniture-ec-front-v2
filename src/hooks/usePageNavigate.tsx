import { useNavigate } from "react-router-dom";
import { PATH } from "../constants/path";

export const usePageNavigate = () => {
  const navigate = useNavigate();

  const toTopNavigate = () => navigate(PATH.TOP());

  return {
    toTopNavigate,
  };
}
