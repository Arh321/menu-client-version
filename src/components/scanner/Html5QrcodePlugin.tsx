"use client";
import { useEffect, useState } from "react";
import "./barcode-scanner.css";
import { Scanner } from "@yudiel/react-qr-scanner";

interface Html5QrcodePluginProps {
  handler: (deskId: string) => void;
  classProp?: string;
}

const Html5QrcodePlugin: React.FC<Html5QrcodePluginProps> = ({
  handler,
  classProp,
}) => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsActive(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div
      className={
        classProp
          ? (classProp as string)
          : "grow  w-full flex flex-col h-full  items-center justify-start relative"
      }
    >
      {isActive ? (
        <Scanner
          classNames={{ container: "animate-fadeIn w-full h-full" }}
          onScan={(result) => handler(result[0].rawValue)}
        />
      ) : (
        <div className="text-center py-8 text-light-secondary-text font-Yekan-Regular font-light">
          ⏸️ اسکنر هنگام خروج از صفحه غیر فعال شد.
        </div>
      )}
    </div>
  );
};

export default Html5QrcodePlugin;
