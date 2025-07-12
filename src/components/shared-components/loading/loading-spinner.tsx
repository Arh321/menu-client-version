
const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative">
        {/* لوگوی اصلی */}
        <img
          src="/images/logo.webp" // مسیر لوگوی خودت رو قرار بده
          alt="Logo"
          width={80}
          height={80}
          className="relative z-10"
        />
        {/* حلقه چرخان */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
