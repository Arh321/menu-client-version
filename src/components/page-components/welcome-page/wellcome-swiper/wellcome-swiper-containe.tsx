"use client";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import style from "./wellcome-swiper-container.module.css";
import WelcomeSwiperSlideCart from "./wellcome-swiper-slide-card";
import ImageWithLoader from "@/components/shared-components/image-with-loader/image-with-loader";
import { slides } from "./welcome-data";
import { useNavigate } from "react-router";

const WelcomeSwiperContainer = () => {
  const [isEnd, setIsEnd] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full h-full  relative">
      <Swiper
        speed={400}
        dir="rtl"
        pagination={{ el: "#paginateRef", clickable: false }}
        navigation={{
          nextEl: "#custom-swiper-page-next",
          prevEl: "#custom-swiper-page-prev",
        }}
        modules={[Pagination, Navigation]}
        onSlideChange={(swiper) => {
          setIsEnd(swiper.isEnd);
        }}
        allowTouchMove={false}
        className={clsx(style["mySwiper"], " !h-full  !w-full")}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={clsx(
              style["swiper-slide"],
              "!flex flex-col justify-end !bg-[#243131]"
            )}
          >
            <div className="absolute top-0 right-0 w-full h-full flex justify-center pt-[10dvh]">
              <div className="w-[312px] h-[312px] p-2 rounded-[20px] border-gradient !bg-transparent">
                <ImageWithLoader
                  src={slide.image}
                  alt="menu-welcome-bg"
                  imageClass="w-full h-full [&_img]:!object-contain flex items-center justify-center"
                  width={290}
                  height={290}
                />
              </div>
            </div>

            <WelcomeSwiperSlideCart
              title={slide.title}
              content={slide.content}
            />

            <div className="absolute bottom-0 right-0 w-full h-[50dvh] bg-linear-gradient-to-top"></div>
          </SwiperSlide>
        ))}

        <div
          id="paginateRef"
          className={clsx(
            style["custom-swiper-pagination"],
            "relative bottom-0 left-0 w-full"
          )}
        ></div>
      </Swiper>

      <div className="absolute bottom-0 w-full px-[22px] py-[26px] left-0 z-10 !flex justify-between items-center transition-all text-light-primary-text">
        {isEnd ? (
          <span
            className="font-Yekan-Medium text-lg w-full text-left cursor-pointer"
            onClick={() => {
              localStorage.setItem("hasSeenWelcomeModal", "true");
              navigate("/");
            }}
          >
            رفتن به منو
          </span>
        ) : (
          <button
            id="custom-swiper-page-next"
            aria-label="next"
            className="flex items-center gap-2 w-full justify-between"
          >
            <span className="font-Yekan-Medium text-lg">بعدی</span>
            <Icon icon="simple-line-icons:arrow-left" width={24} height={24} />
          </button>
        )}
      </div>

      <button id="custom-swiper-page-prev" className="!hidden"></button>
    </div>
  );
};

export default WelcomeSwiperContainer;
