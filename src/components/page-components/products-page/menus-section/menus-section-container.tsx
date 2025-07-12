import { IMenu } from "@/types/menu/menu-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import MenuItem from "./menu-item";
import styles from "./menus-swiper.module.css";
import { useEffect, useState } from "react";
interface IMenusSectionContainerProps {
  menus: IMenu[];
  selectedMenu: number | null;
  setSelectedMenu: (menu: number) => void;
}

const MenusSectionContainer = ({
  menus,
  selectedMenu,
  setSelectedMenu,
}: IMenusSectionContainerProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiperRef, setSwiperRef] = useState<any>();

  const initialSlide = menus.findIndex((menu) => menu.menu_id === selectedMenu);
  const handleSlideChange = (swiper: SwiperType) => {
    setSelectedMenu(menus[swiper.activeIndex].menu_id);
    localStorage.setItem(
      "selectedMenuId",
      String(menus[swiper.activeIndex].menu_id)
    );
  };

  useEffect(() => {
    if (swiperRef) {
      const initialSlide = menus.findIndex(
        (menu) => menu.menu_id === selectedMenu
      );
      swiperRef.slideTo(initialSlide);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiperRef]);

  return (
    <div className="w-full relative">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          480: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3.5,
          },
        }}
        centeredSlides={true}
        slideToClickedSlide={true}
        spaceBetween={25}
        initialSlide={initialSlide}
        onSwiper={setSwiperRef}
        onSlideChange={handleSlideChange}
        className={styles["menus-section-container"]}
        allowTouchMove={false}
      >
        {menus.map((menu) => (
          <SwiperSlide key={menu.menu_id}>
            <MenuItem menu={menu} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MenusSectionContainer;
