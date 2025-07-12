"use client";
import React from "react";
import { Drawer } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
export interface ISocialMedia {
  title: string;
  url: string;
  icon: string;
  color: string;
}

interface SocialMediaDrawerProps {
  open: boolean;
  onClose: () => void;
  socialMedia: ISocialMedia[];
}

const SocialMediaDrawer: React.FC<SocialMediaDrawerProps> = ({
  open,
  onClose,
  socialMedia,
}) => {
  // console.log("entered contactusbottom drawer");
  return (
    <Drawer
      title="شبکه های اجتماعی"
      placement="bottom"
      closable
      className="custom-list"
      onClose={onClose}
      open={open}
      classNames={{
        header:
          "!border-none font-Yekan-Medium [&_.ant-drawer-header-title]:flex-row-reverse !p-2",
        content: "!bg-light-background rounded-t-xl",
        body: "!p-2",
      }}
      height="70vh" // ارتفاع کلی دراور
      style={{ maxHeight: "70vh", overflowY: "auto", direction: "rtl" }} // حداکثر ارتفاع لیست و قابلیت اسکرول
    >
      <div className="w-full grid grid-cols-2 gap-6 p-8">
        {socialMedia.map((item) => (
          <div
            key={item.title}
            onClick={() => window.open(item.url, "_blank")}
            className="w-full aspect-square rounded-[6px] overflow-hidden bg-[rgb(0,0,0,0.8)] flex flex-col items-center justify-center gap-4"
          >
            <Icon
              icon={item.icon}
              width="40"
              height="40"
              style={{ color: item.color ?? "#fff" }}
            />
            <span className="text-white font-Yekan-Medium text-sm">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </Drawer>
  );
};

export default SocialMediaDrawer;
