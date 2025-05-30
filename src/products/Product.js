import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './Product.css'

const ProductPage = () => {
  
  
  return (
    <>
       <Swiper
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
       navigation={
        {
        nextEl: '.rightbtn',
        prevEl: '.leftbtn'
      }}
      freeMode={true}
        pagination={
          { clickable: true }
        }
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><h1>Slide 1</h1></SwiperSlide>
      <SwiperSlide><h1>Slide 1</h1></SwiperSlide>
      <SwiperSlide><h1>Slide 1</h1></SwiperSlide>
      <SwiperSlide><h1>Slide 1</h1></SwiperSlide>
    </Swiper>
     
    </>
  );
};

export default ProductPage;
