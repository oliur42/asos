"use client"; // For App Router

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Carosule = () => {
  return (
    <div className="w-full  mx-auto py-8">
        <h1 className="text-center font-bold text-[28px] py-4">Best Seller </h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <img cl  src="https://content.asos-media.com/-/media/homepages/mw/2025/july/14-mena-row-apac-ie/hero/hp_ww_hero_wk46_2880x1280_row.jpg" alt="Slide 1"  />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://content.asos-media.com/-/media/homepages/mw/2025/july/14-mena-row-apac-ie/hero/hp_ww_hero_wk46_2880x1280_row.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://content.asos-media.com/-/media/homepages/mw/2025/july/14-mena-row-apac-ie/hero/hp_ww_hero_wk46_2880x1280_row.jpg" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://content.asos-media.com/-/media/homepages/mw/2025/july/14-mena-row-apac-ie/hero/hp_ww_hero_wk46_2880x1280_row.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://content.asos-media.com/-/media/homepages/mw/2025/july/14-mena-row-apac-ie/hero/hp_ww_hero_wk46_2880x1280_row.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://content.asos-media.com/-/media/homepages/mw/2025/july/14-mena-row-apac-ie/hero/hp_ww_hero_wk46_2880x1280_row.jpg" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
      <div className="py-6 flex justify-center items-center">
        <button className="bg-black text-white py-2 px-12">Shop Now</button>
      </div>
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px] mx-auto mt-[-100px] ">
      <Image
        src="/logo.PNG"
        alt="logo"
        fill
        className="object-contain " 
        priority
      />
    </div>
    </div>
  );
};

export default Carosule;
