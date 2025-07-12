import ContactUsBottom from "@/components/shared-components/header/sidebar-components/contact-us-bottom";
import SocialMediaDrawer, { ISocialMedia } from "@/components/shared-components/header/sidebar-components/social-media-drawer";
import WorkTimesDrawer from "@/components/shared-components/header/sidebar-components/work-times-bottom";
import { Dispatch, SetStateAction, useMemo } from "react";

interface CompanyInfoItemsContainerProps {
  openModals: {
    WorkTimesDrawer: boolean;
    SocialModal: boolean;
    ContactUsDrawer: boolean;
  };
  setOpenModals: Dispatch<
    SetStateAction<{
      WorkTimesDrawer: boolean;
      SocialModal: boolean;
      ContactUsDrawer: boolean;
    }>
  >;
  social_media: string | undefined;
}

const CompanyInfoDrawersContainer: React.FC<CompanyInfoItemsContainerProps> = ({
  openModals,
  setOpenModals,
  social_media,
}) => {
  const socialMedia = useMemo<ISocialMedia[]>(
    () =>
      social_media
        ? Object.entries(JSON.parse(social_media)).map(([title, url]) => ({
          title:
            title === "instagram"
              ? "اینستاگرام"
              : title === "telegram"
                ? "تلگرام"
                : title === "whatsapp"
                  ? "واتساپ"
                  : title === "twitter"
                    ? "توییتر"
                    : title === "facebook"
                      ? "فیسبوک"
                      : title,
          url: url as string,
          icon: `mdi:${title}`,
          color:
            title === "instagram"
              ? "#E4405F"
              : title === "telegram"
                ? "#0088cc"
                : title === "whatsapp"
                  ? "#25D366"
                  : title === "twitter"
                    ? "#1DA1F2"
                    : title === "facebook"
                      ? "#1877F2"
                      : "#000000",
        }))
        : [],
    [social_media]
  );

  return (
    <>
      <ContactUsBottom
        open={openModals.ContactUsDrawer}
        onClose={() => setOpenModals({ ...openModals, ContactUsDrawer: false })}
      />
      <WorkTimesDrawer
        open={openModals.WorkTimesDrawer}
        onClose={() => setOpenModals({ ...openModals, WorkTimesDrawer: false })}
      />
      <SocialMediaDrawer
        open={openModals.SocialModal}
        onClose={() => setOpenModals({ ...openModals, SocialModal: false })}
        socialMedia={socialMedia}
      />
    </>
  );
};

export default CompanyInfoDrawersContainer;
