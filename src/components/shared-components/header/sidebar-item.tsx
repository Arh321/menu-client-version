import React from "react";

const SidebarItems = ({
  text,
  icon,
  onClick,
}: {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <li
      className="flex text-light-secondary-text items-center gap-3 p-2 hover:bg-light-secondary rounded transition cursor-pointer font-Yekan-Medium"
      onClick={onClick}
    >
      {icon}
      {text}
    </li>
  );
};

export default SidebarItems;
