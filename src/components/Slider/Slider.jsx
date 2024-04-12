import React , { useRef, useState } from "react";
import  './Slider.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";



export default function Slider() {
  return (
    <>
      <Swiper className="mySwiper">

        <SwiperSlide>
            <div className="slide slide1">
                    
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide slide2">

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide slide3">

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide slide4">

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide slide5">

            </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
