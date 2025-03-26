import { useEffect, useState } from "react";

const STORAGE_KEY = 'STORAGE_KEY_COOKIE_CONSENT';

export const useCookieConsent = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRequestClose = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    closeModal();
  }

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      closeModal();
    }
  });

  return {
    isModalOpen,
    closeModal,
    handleRequestClose,
  }
}
