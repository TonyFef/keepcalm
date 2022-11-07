import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";

import cn from "classnames";

import "swiper/css";
import styles from "../styles/Slider.module.scss";
import { useEffect, useState } from "react";
import { Image } from "./Image";

const Slider = () => {
  const [imagesForSliderArray, setImagesForSliderArray] = useState<string[]>(
    []
  );

  // Можно было бы использовать библиотеку i18next для хранения данных в одном файле, но решил оставить так

  useEffect(() => {
    setImagesForSliderArray([
      "/sliderImages/1.png",
      "/sliderImages/2.png",
      "/sliderImages/3.png",
      "/sliderImages/4.png",
      "/sliderImages/5.png",
      "/sliderImages/6.png",
      "/sliderImages/7.png",
      "/sliderImages/8.png",
      "/sliderImages/9.png",
    ]);
  }, []);

  return (
    <>
      <Swiper
        className={styles.swiper}
        direction={"horizontal"}
        // slidesPerView={4.6}
        // spaceBetween={40}
        mousewheel={true}
        modules={[Mousewheel]}
        loop={true}
        breakpoints={{
          310: {
            slidesPerView: 1.6,
          },
          640: {
            slidesPerView: 1.6,
          },
          730: {
            slidesPerView: 2.6,
          },
          1100: {
            slidesPerView: 3.6,
          },
          1700: {
            slidesPerView: 4.6,
          },
        }}
      >
        {imagesForSliderArray.map((item) => (
          <SwiperSlide
            key={item}
            className={cn(
              styles["swiper-slide"],
              styles["parallax-layer"],
              styles["parallax-image"]
            )}
          >
            <Image src={item} alt="slider img" width={320} height={489}></Image>
            {/* <img src={item} alt="slider img" /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
