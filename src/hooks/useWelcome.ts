import { useEffect } from "react";
import { useNavigate } from "react-router";

const useWelcome = () => {
  const navigate = useNavigate();
  const hasSeenModal = localStorage.getItem("hasSeenWelcomeModal");
  useEffect(() => {
    if (!hasSeenModal) {
      navigate("/welcome");
    }
  }, [hasSeenModal, navigate]); // به router بستگی داره ولی مشکلی ایجاد نمی‌کنه
};

export default useWelcome;
