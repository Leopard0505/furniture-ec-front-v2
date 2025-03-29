import { useNavigate } from 'react-router';
import { PATH } from "../constants/path";

export const usePageNavigate = () => {
  const navigate = useNavigate();

  const toTopNavigate = () => navigate(PATH.TOP());

  return {
    toTopNavigate,
  };
}
