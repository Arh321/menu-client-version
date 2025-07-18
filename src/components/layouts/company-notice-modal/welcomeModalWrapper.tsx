import { useThemeConfigContext } from "../config-layout/ThemeConfigContext";
import WelcomeModal from "./welcome-modal";

const WelcomeModalWrapper = () => {
  const { welcomeModal, setWelcomeModal } = useThemeConfigContext();

  return (
    <WelcomeModal
      isOpen={welcomeModal.isOpen}
      title={welcomeModal.title}
      onOk={() => {
        setWelcomeModal({
          isOpen: false,
          title: "",
          description: "",
        });
        sessionStorage.setItem("welcomeModalShown", "true");
      }}
      onCancel={() => {
        setWelcomeModal({
          isOpen: false,
          title: "",
          description: "",
        });
        sessionStorage.setItem("welcomeModalShown", "true");
      }}
    />
  );
};

export default WelcomeModalWrapper;
