import LoadingPages from "@/components/shared-components/loading/pages-loading";
import { useNavigation } from "react-router";

// Wrapper برای مدیریت لودینگ
function RouteLoaderWrapper({
  children, // کامپوننت‌های فرزند
}: {
  children: React.ReactNode;
}) {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <LoadingPages />;
  }

  return children;
}

export default RouteLoaderWrapper;
