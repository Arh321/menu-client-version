import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { LeftOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import { NavigateFunction, useLocation } from "react-router";
import ImageWithLoader from "../../image-with-loader/image-with-loader";

const MainHeader = ({
  setOpen,
  companyLogo,
  navigate,
}: {
  setOpen: (value: boolean) => void;
  companyLogo: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigate: NavigateFunction
}) => {
  const { pathname: path } = useLocation();
  const isInbasket = useMemo(() => {
    return path.includes("basket");
  }, [path]);

  return (
    <>
      <div className="w-full grid grid-cols-3 gap-4 items-center pt-2 px-4">
        <div className="col-span-1">
          <CTAButton
            onClick={() => setOpen(true)}
            className="!bg-transparent !border-none !text-2xl !p-2 !w-max !text-light-secondary-text hover:!bg-light-secondary "
          >
            <Icon icon="ion:menu" width="28" height="28" />
          </CTAButton>
        </div>
        <div className="col-span-1 flex flex-col items-center gap-1">
          <div className="relative width-[70px] overflow-hidden flex items-center">
            <ImageWithLoader
              src={companyLogo || ""}
              alt="company logo"
              width={70}
              height={55}
              imageClass="!object-contain [&_img]:!object-contain"
            />
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-end">
          <CTAButton
            onClick={() => navigate(-1)}
            className="!bg-transparent !border-none !text-xl !p-2 !w-max !text-light-secondary-text hover:!bg-light-secondary "
          >
            <LeftOutlined />
          </CTAButton>
        </div>
      </div>
      {!isInbasket && (
        <div className="w-full px-4">
          <div className="w-full h-1 border-gradient-secondary border-b-2 border-light-gray"></div>
        </div>
      )}
    </>
  );
};

export default MainHeader;
