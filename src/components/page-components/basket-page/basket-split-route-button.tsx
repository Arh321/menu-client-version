import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { memo } from "react";
import { NavigateFunction } from "react-router";

interface BasketSplitRouteButtonProps {
  depId: string;
  navigate: NavigateFunction;
}

const BasketSplitRouteButton: React.FC<BasketSplitRouteButtonProps> = ({
  depId,
  navigate,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 px-4">
      <div className="w-full px-4">
        <div className="w-full h-1 border-gradient-primary border-b-2 border-light-primary"></div>
      </div>
      <CTAButton
        onClick={() => navigate(`/departments/${depId}/basket/split`)}
        className="!bg-light-primary-disabled border border-light-primary !p-2 h-max"
      >
        <span className="text-xs whitespace-nowrap">تقسیم دنگی</span>
      </CTAButton>
    </div>
  );
};

export default memo(BasketSplitRouteButton);
