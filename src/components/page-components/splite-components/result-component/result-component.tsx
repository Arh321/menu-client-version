import { Suspense } from "react";
import EqualSplitComponent from "../options-components/equalSplit/equalSplit";
import SpliteMEthodResults from "./splite-result-component";
import { LoadingOutlined } from "@ant-design/icons";

interface ResultComponentProps {
  activeKey: "equal" | "split" | "mixed";
}

const resultComponents: Record<"equal" | "split" | "mixed", React.JSX.Element> =
  {
    equal: (
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="w-max h-max block text-2xl">
              <LoadingOutlined />
            </span>
          </div>
        }
      >
        <EqualSplitComponent />
      </Suspense>
    ),
    split: (
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="w-max h-max block text-2xl">
              <LoadingOutlined />
            </span>
          </div>
        }
      >
        <div>
          <SpliteMEthodResults />
        </div>
      </Suspense>
    ),
    mixed: <div></div>,
  };

const ResultComponent: React.FC<ResultComponentProps> = ({ activeKey }) => {
  return (
    <div className="result-container w-full h-full">
      {resultComponents[activeKey] ? (
        resultComponents[activeKey]
      ) : (
        <div className="w-full h-full font-Yekan-Medium text-lg flex items-center justify-center text-light-secondary-text">
          هنوز تقسیم بندی ای انتخاب نکرده اید
        </div>
      )}
    </div>
  );
};

export default ResultComponent;
