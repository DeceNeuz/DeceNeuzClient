"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { Button } from "../ui/button";
import Image from "next/image";
import connectWalletIllustration from "@/public/wallet-connect.png";
import metamaskLogo from "@/public/metamask-icon.png";
import {
  useConnect,
  metamaskWallet,
} from "@thirdweb-dev/react";
const walletConfig = metamaskWallet();


export default function ConnectWalletModal() {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "CONNECT-WALLET";

  const handleClose = () => {
    onClose();
  };

  const connect = useConnect();

  async function handleConnect() {
    try {
      const wallet = await connect(
        walletConfig,
      );

      console.log("connected to", wallet);
    } catch (e) {
      console.error("failed to connect", e);
    }
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader></DialogHeader>
        <div className="flex w-full flex-col items-center justify-center gap-6 px-8 py-4">
          <div className="flex w-48 items-center justify-center">
            <Image
              src={connectWalletIllustration}
              alt="Connect Wallet Illustration"
            />
          </div>
          <h1 className="font-oswald text-2xl font-semibold uppercase">
            Oops...
          </h1>
          <p className="text-center text-sm text-slate-500">
            Looks like you havent connected your crypto wallet yet! Connect now
            to write articles as well as receive incentives.
          </p>
          <Button
            variant={"outline"}
            className="w-full max-w-80 rounded bg-orange-500 px-8 py-2 text-sm text-white hover:bg-orange-600 hover:text-white"
            onClick={handleConnect}
          >
            <Image
              src={metamaskLogo}
              alt="MetaMask Logo"
              className="mr-3"
              height={24}
              width={24}
            />
            Connect MetaMask
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
