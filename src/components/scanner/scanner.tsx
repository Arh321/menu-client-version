import React, { Suspense } from "react";
import { Modal } from "antd";

import Html5QrcodePlugin from "./Html5QrcodePlugin";
import CTAButton from "../shared-components/cta-button/cta-button";
import { CloseOutlined } from "@ant-design/icons";
import { DepartmentItemSkeleton } from "../page-components/departments-page/department-item-skeleton";
import { useNavigate } from "react-router";

interface BarcodeScannerModalContainerProps {
  handleCancel: () => void;
  openState: boolean;
}

const BarcodeScannerModalContainer: React.FC<
  BarcodeScannerModalContainerProps
> = ({ handleCancel, openState }) => {
  // const [zoom, setZoom] = useState(1);
  const navigate = useNavigate();
  const scannerResultHandler = (value: string) => {
    navigate(window.location.origin + "/" + value);
    if (value) {
      handleCancel();
    }
  };

  return (
    <Modal
      title={
        <div className="w-full flex items-center justify-between">
          <h2 className="font-Yekan-Regular text-light-secondary-text font-[300]">
            بارکد مجموعه را اسکن کنید
          </h2>
          <CTAButton
            onClick={handleCancel}
            className="!bg-transparent !text-light-primary !w-max !h-max"
          >
            <CloseOutlined />
          </CTAButton>
        </div>
      }
      open={openState}
      onCancel={handleCancel}
      className="!bg-light-secondary !backdrop-blur-md rounded-lg"
      classNames={{
        content: "!bg-black/10 !backdrop-blur-xs !p-4",
        header: "!bg-transparent !pb-4 !m-0",
      }}
      footer={null}
      closeIcon={false}
      destroyOnHidden
      centered
    >
      <div className="relative flex flex-col items-center">
        {/* کادر اسکن */}
        <div className="relative min-w-[300px] min-h-[300px] w-full h-full bg-black rounded-xl overflow-hidden shadow-lg">
          {/* اسکنر */}
          <Suspense
            fallback={<DepartmentItemSkeleton parentClass="!-full !h-full" />}
          >
            <Html5QrcodePlugin handler={scannerResultHandler} />
          </Suspense>
        </div>
      </div>
    </Modal>
  );
};

export default BarcodeScannerModalContainer;
