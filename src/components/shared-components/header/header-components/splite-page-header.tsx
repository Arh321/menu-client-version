import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { LeftOutlined } from "@ant-design/icons";
import { NavigateFunction } from "react-router";
import ImageWithLoader from "../../image-with-loader/image-with-loader";

const SplitPageHeader = ({
  navigate,
  companyLogo,
}: {
  navigate: NavigateFunction;
  companyLogo: string;
}) => {
  return (
    <>
      <div className="w-full grid grid-cols-3 gap-4 items-center pt-2 px-4">
        <div className="col-span-1 flex flex-col items-center gap-1">
          <div
            role="button"
            onClick={() => navigate("/departments")}
            className="relative width-[50px] overflow-hidden flex items-center"
          >
            <ImageWithLoader
              src={companyLogo || ""}
              alt="company logo"
              width={50}
              height={55}
              imageClass="[&_img]:!object-cover [&_img]:!object-contain !size-[50px]"
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center gap-1 font-Yekan-Medium text-light-secondary-text">
          تقسیم دنگی
        </div>
        <div className="col-span-1 flex justify-end">
          <CTAButton
            onClick={() => navigate(-1)}
            className="!bg-transparent !border-none !text-xl !p-0 !w-max !text-light-secondary-text"
          >
            <LeftOutlined />
          </CTAButton>
        </div>
      </div>
      <div className="w-full px-4">
        <div className="w-full h-1 border-gradient-secondary border-b-2 border-light-gray"></div>
      </div>
    </>
  );
};

export default SplitPageHeader;
