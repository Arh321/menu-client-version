import { Icon } from "@iconify/react/dist/iconify.js";
import CTAButton from "@/components/shared-components/cta-button/cta-button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const CompanyHeader = ({ setOpen }: { setOpen: (value: boolean) => void }) => {
  const { company } = useSelector((state: RootState) => state.company);
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: company?.name || "",
          text: company?.description || "",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      try {
        await navigator.clipboard.writeText(window.location.href);
        // You may want to show a toast/notification here that URL was copied
      } catch (error) {
        console.error("Error copying to clipboard:", error);
      }
    }
  };
  return (
    <div className="w-full grid grid-cols-3 gap-4 items-center pt-2 px-4">
      <div className="col-span-1">
        <CTAButton
          onClick={() => setOpen(true)}
          className="!bg-transparent !border-none !text-2xl !p-0 !w-max !text-light-secondary-text"
        >
          <Icon icon="ion:menu" width="28" height="28" />
        </CTAButton>
      </div>
      <div className="col-span-1 flex flex-col items-center gap-1"></div>
      <div className="col-span-1 flex justify-end">
        <CTAButton
          onClick={() => handleShare()}
          className="!bg-transparent !border-none !text-xl !p-0 !w-max !text-light-secondary-text"
        >
          <Icon icon="mynaui:share" width="30" height="30" />
        </CTAButton>
      </div>
    </div>
  );
};

export default CompanyHeader;
