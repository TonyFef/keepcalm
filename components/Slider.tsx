import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";

import "swiper/css";
import styles from "../styles/Slider.module.scss";

const Slider = () => {
  // Можно было бы использовать библиотеку i18next для хранения данных в одном файле, но решил оставить так
  const imagesForSliderArray: string[] = [
    "/sliderImages/1.png",
    "/sliderImages/2.png",
    "/sliderImages/3.png",
    "/sliderImages/4.png",
    "/sliderImages/5.png",
    "/sliderImages/6.png",
    "/sliderImages/7.png",
    "/sliderImages/8.png",
    "/sliderImages/9.png",
  ];

  return (
    <>
      <Swiper
        className={styles.swiper}
        direction={"horizontal"}
        slidesPerView={4.6}
        spaceBetween={40}
        mousewheel={true}
        modules={[Mousewheel]}
        loop={true}
      >
        {imagesForSliderArray.map((item) => (
          <SwiperSlide key={item} className={styles["swiper-slide"]}>
            <img src={item} alt="slider img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
