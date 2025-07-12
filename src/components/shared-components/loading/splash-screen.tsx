import ImageWithLoader from "../image-with-loader/image-with-loader";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-light-background z-50">
      <div className="relative flex items-center justify-center w-[120px] h-[120px]">
        {/* اسپینر */}
        <div className="absolute w-full h-full animate-spin rounded-full border-4 border-t-transparent border-white"></div>

        {/* لوگو */}
        <ImageWithLoader
          width={70}
          height={70}
          alt="Logo"
          imageClass="w-full h-full z-10 !bg-transparent"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
