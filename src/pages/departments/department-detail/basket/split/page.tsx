"use client";

import { Spin, Tabs, TabsProps } from "antd";
import style from "./split-page-style.module.css";
import clsx from "clsx";
import { Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  DynamicOptionsContainer,
  DynamicParticipantsComponent,
  DynamicResultComponent,
} from "@/components/page-components/splite-components/splite-dynamic-components";

const SplitPage = () => {
  const [activeTAb, setActiveTab] = useState("1");
  const [activeKey, setActiveKey] = useState<"split" | "equal" | "mixed">(
    "equal"
  );

  const participants = useSelector(
    (state: RootState) => state.participants.participants
  );

  const onChange = (key: string) => {
    setActiveTab(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "تعریف دوستان",
      children: (
        <DynamicParticipantsComponent
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          handleChoseOption={(key: any) => {
            setActiveTab("2");
            setActiveKey(key);
          }}
        />
      ),
    },
    {
      key: "2",
      label: "انتخاب دنگ و دونگی",
      disabled: participants.length == 0,
      children: (
        <DynamicOptionsContainer
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          handleChoseOption={(key: any) => {
            setActiveTab("3");
            setActiveKey(key);
          }}
        />
      ),
    },
    {
      key: "3",
      label: "نتیجه",
      disabled: participants.length == 0,
      children: <DynamicResultComponent activeKey={activeKey} />,
    },
  ];

  return (
    <div className="p-4 w-full grow h-full overflow-y-auto flex flex-col gap-4 [&_.ant-tabs-tab-disabled]:!opacity-30">
      <Suspense fallback={<Spin />}>
        <Tabs
          defaultActiveKey="1"
          activeKey={activeTAb}
          items={items}
          onChange={onChange}
          className={clsx(style["split-page-container"])}
        />
      </Suspense>
    </div>
  );
};

export default SplitPage;
