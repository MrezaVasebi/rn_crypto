import { useState } from "react";

export const useProfile = () => {
  const [addingBankCartModal, setAddingBankCartModal] =
    useState<boolean>(false);

  const [selfieModal, setSelfieModal] = useState<boolean>(false);
  const [idCardModal, setIdCardModal] = useState<boolean>(false);

  function handleAddingBankCardModal(value: boolean) {
    setAddingBankCartModal(value);
  }

  function handleSelfieModal(value: boolean) {
    setSelfieModal(value);
  }

  function handleIdCardModal(value: boolean) {
    setIdCardModal(value);
  }

  let fields = {
    addingBankCartModal,
    selfieModal,
    idCardModal,
  };

  return {
    fields,
    handleAddingBankCardModal,
    handleSelfieModal,
    handleIdCardModal,
  };
};
