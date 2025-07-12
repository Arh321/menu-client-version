"use client";
import React from "react";
import { Drawer, List } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
interface ContactUsBottomProps {
  open: boolean;
  onClose: () => void;
}

const ContactUsBottom: React.FC<ContactUsBottomProps> = ({ open, onClose }) => {
  const { company } = useSelector((state: RootState) => state.company);
  const contactUsInfoItems = [
    { title: "شماره موبایل", phoneNumber: company?.phone_number },
    { title: "شماره ثابت", phoneNumber: company?.phone_number },
    { title: "آدرس", phoneNumber: company?.address_line },
    { title: "کد پستی", phoneNumber: company?.postal_code },
  ];

  return (
    <Drawer
      title="ارتباط با ما"
      placement="bottom"
      closable
      className="custom-list"
      onClose={onClose}
      open={open}
      classNames={{
        header:
          "!border-none font-Yekan-Medium [&_.ant-drawer-header-title]:flex-row-reverse !text-light-secondary-text [&_.anticon-close]:!text-light-secondary-text !p-2",
        content: "!bg-light-background rounded-t-xl",
        body: "!p-2",
      }}
      height="70vh" // ارتفاع کلی دراور
      style={{ maxHeight: "70vh", overflowY: "auto", direction: "rtl" }} // حداکثر ارتفاع لیست و قابلیت اسکرول
    >
      <List
        dataSource={contactUsInfoItems}
        className=" custom-list gap-2 overflow-y-auto font-Yekan-Medium"
        renderItem={(item) => (
          <List.Item className={`flex justify-between items-center `}>
            <span className="font-Yekan-Medium text-light-secondary-text">
              {item.title}
            </span>
            <span className="text-light-secondary-text">
              {" "}
              {item.phoneNumber}
            </span>
          </List.Item>
        )}
      />
    </Drawer>
  );
};

export default ContactUsBottom;
