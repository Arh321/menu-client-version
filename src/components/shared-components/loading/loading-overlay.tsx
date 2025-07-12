
const LoadingOverlay = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return;

  return (
    <div className="fixed inset-0 flex justify-center items-center  z-50">
      <div className="relative flex items-center justify-center w-[120px] h-[120px]">
        {/* اسپینر */}
        <div className="absolute w-full h-full animate-spin rounded-full border-4 border-t-transparent border-white"></div>
        {/* لوگو */}
        <img
          src="/images/logo.webp"
          width={70}
          height={70}
          alt="Logo"
          className="z-10"
        />
      </div>
    </div>
  );
};

export default LoadingOverlay;
