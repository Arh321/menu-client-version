import WelcomeSwiperContainer from "@/components/page-components/welcome-page/wellcome-swiper/wellcome-swiper-containe";
import SplashScreen from "@/components/shared-components/loading/splash-screen";
import { Suspense } from "react";
export default function WelcomePage() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <div className="w-full  mx-auto h-screen relative light:bg-background dark:bg-background">
        <WelcomeSwiperContainer />
      </div>
    </Suspense>
  );
}
