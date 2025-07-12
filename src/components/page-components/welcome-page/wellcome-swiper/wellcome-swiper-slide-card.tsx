interface WelcomeSwiperSlideCartProps {
  title: string;
  content: string;
}

const WelcomeSwiperSlideCart: React.FC<WelcomeSwiperSlideCartProps> = ({
  content,
  title,
}) => {
  return (
    <div
      dir="rtl"
      className="w-full flex flex-col gap-[10px] h-[280px] px-[22px] py-[26px] z-10"
    >
      <h2 className="font-Almarai-ExtraBold translate-x-full opacity-0 text-[24px] !text-light-primary-text dark:text-dark-primary-text">
        {title}
      </h2>
      <p className="font-Almarai-Light translate-y-full opacity-0 text-[14px] leading-[22px] text-light-primary-text dark:text-dark-primary-text">
        {content}
      </p>
    </div>
  );
};

export default WelcomeSwiperSlideCart;
