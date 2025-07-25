"use client";
import React, { createContext, useContext } from "react";
import { message } from "antd";

type NotificationType = "success" | "error" | "warning";

interface NotifyContextProps {
  notify: (type: NotificationType, content: string) => void;
}

const NotifyContext = createContext<NotifyContextProps | undefined>(undefined);

export const NotifyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  const notify = (type: NotificationType, content: string) => {
    messageApi.open({
      type,
      content,
      className: "!font-Yekan-Medium",
      style: {
        direction: "rtl",
      },
    });
  };

  return (
    <NotifyContext.Provider value={{ notify }}>
      {contextHolder}
      {children}
    </NotifyContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNotify = () => {
  const context = useContext(NotifyContext);
  if (!context) {
    throw new Error("useNotify must be used within a NotifyProvider");
  }
  return context;
};
