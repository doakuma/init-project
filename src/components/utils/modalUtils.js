import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  console.debug("useModal");
  return {
    isOpen,
    openModal,
    closeModal,
  };
};
