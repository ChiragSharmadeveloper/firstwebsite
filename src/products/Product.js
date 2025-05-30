import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import './Product.css'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";


const ProductPage = () => {
  
  return (
    <div>
 <button class='lbtn1' ><SlArrowLeft /> </button>
      <button class='rbtn1'><SlArrowRight /></button>
       <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={2}
       navigation={
        {
        nextEl: '.rbtn1',
        prevEl: '.lbtn1'
      }}
      freeMode={true}
        pagination={
          { clickable: true }
        }
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      <div class='main'>
      <SwiperSlide>
        slide 1
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      </div>
    </Swiper>

     
     



    </div>
  );
};

export default ProductPage;
