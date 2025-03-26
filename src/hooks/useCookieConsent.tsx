import { useEffect, useState } from "react";

export const STORAGE_KEY = 'STORAGE_KEY_COOKIE_CONSENT';

export const useCookieConsent = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    localStorage.setItem(STORAGE_KEY, 'false');
    setIsModalOpen(false);
  };

  const handleRequestClose = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    closeModal();
  }

  useEffect(() => {
    const consentStatus = localStorage.getItem(STORAGE_KEY);
    if (consentStatus === 'true' || consentStatus === 'false') {
      closeModal();
    }
  });

  return {
    isModalOpen,
    closeModal,
    handleRequestClose,
  }
}
