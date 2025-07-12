"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import CTAButton from "../shared-components/cta-button/cta-button";
import BarcodeScannerModalContainer from "./scanner";
import { useState } from "react";
// import useDeviceBackButton from "@/hooks/useDeviceBackButton";
// import "./barcode-scanner.css";

const Html5QrcodePlugin = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleCancel = () => {
    setOpen(false);
  };
  // useDeviceBackButton(open, handleCancel);
  return (
    <>
      <CTAButton
        onClick={() => setOpen(true)}
        className="!w-full h-full flex justify-center items-center gap-2"
      >
        <span>اسکن شعبه</span>
        <Icon icon="uil:qrcode-scan" width="24" height="24" />
      </CTAButton>
      <BarcodeScannerModalContainer
        handleCancel={handleCancel}
        openState={open}
      />
    </>
  );
};

export default Html5QrcodePlugin;
