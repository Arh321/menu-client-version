"use client";
import React from "react";
import { Drawer, List } from "antd";
import clsx from "clsx";

interface WorkTimesDrawerProps {
  open: boolean;
  onClose: () => void;
}

const WorkTimesDrawer: React.FC<WorkTimesDrawerProps> = ({ open, onClose }) => {
  const getCurrentDayInPersian = () => {
    const weekDays = [
      "یکشنبه",
      "دوشنبه",
      "سه‌شنبه",
      "چهارشنبه",
      "پنج‌شنبه",
      "جمعه",
      "شنبه",
    ];
    const today = new Date().getDay(); // 0 is Sunday
    return weekDays[today];
  };

  const timeSlots = [
    {
      day: "شنبه",
      time: "08:00 - 24:00",
      isToday: getCurrentDayInPersian() === "شنبه",
    },
    {
      day: "یکشنبه",
      time: "16:00 - 24:00",
      isToday: getCurrentDayInPersian() === "یکشنبه",
    },
    {
      day: "دوشنبه",
      time: "08:00 - 24:00",
      isToday: getCurrentDayInPersian() === "دوشنبه",
    },
    {
      day: "سه‌شنبه",
      time: "08:00 - 24:00",
      isToday: getCurrentDayInPersian() === "سه‌شنبه",
    },
    {
      day: "چهارشنبه",
      time: "08:00 - 24:00",
      isToday: getCurrentDayInPersian() === "چهارشنبه",
    },
    {
      day: "پنج‌شنبه",
      time: "08:00 - 24:00",
      isToday: getCurrentDayInPersian() === "پنج‌شنبه",
    },
    {
      day: "جمعه",
      time: "08:00 - 24:00",
      isToday: getCurrentDayInPersian() === "جمعه",
    },
  ];
  return (
    <Drawer
      title="ساعات کاری مجموعه"
      placement="bottom"
      closable
      className="custom-list "
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
        dataSource={timeSlots}
        className=" [&_.ant-list-items]:flex [&_.ant-list-items]:flex-col [&_.ant-list-items]:gap-2 overflow-hidden"
        renderItem={(item) => (
          <List.Item
            className={clsx(
              "flex justify-between items-center font-Yekan-Medium rounded-xl overflow-hidden h-12 !py-0  backdrop-blur-sm !border-none",
              item.isToday && "bg-light-secondary"
            )}
          >
            <span
              className={clsx(
                "w-4 h-full",
                item.isToday ? "bg-light-primary" : "bg-transparent"
              )}
            ></span>
            <span className="font-bold grow text-center text-light-secondary-text">
              {item.day}
            </span>
            <span className="grow text-center text-light-secondary-text">
              {" "}
              {item.time}
            </span>
          </List.Item>
        )}
      />
    </Drawer>
  );
};

export default WorkTimesDrawer;
