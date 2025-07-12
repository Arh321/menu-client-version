
import Html5QrcodePlugin from "@/components/scanner/barcode-scanner";
import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { memo } from "react";
import { useNavigate } from "react-router";

const CompanyPageFooter = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full grid grid-cols-4 gap-2 p-4 animate-fadeUp">
      <CTAButton
        onClick={() => {
          navigate("/departments");
        }}
        className="w-full col-span-2 px-[28px] py-[14px]"
      >
        مشاهده منو
      </CTAButton>
      <div className="col-span-2">
        <Html5QrcodePlugin />
      </div>
    </div>
  );
};

export default memo(CompanyPageFooter);
