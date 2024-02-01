"use client";

import { useEffect, useState } from "react";
import ConnectWalletModal from "../modals/connect-wallet-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ConnectWalletModal />
    </>
  );
};
