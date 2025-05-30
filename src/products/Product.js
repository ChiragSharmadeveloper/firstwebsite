import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
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
    <>
     <button class='lbtn1' ><SlArrowLeft /> </button>
       <Swiper
      
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
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
      onSlideChange={() => console.log('slide change')}
    >
<<<<<<< HEAD
      <div className='main'>
        
      <SwiperSlide>
        <img alt='slide1'/>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      </div>
=======
      <SwiperSlide><h1>Slide 1</h1></SwiperSlide>
      <SwiperSlide><h1>Slide 1</h1></SwiperSlide>
      <SwiperSlide><h1>Slide 1</h1></SwiperSlide>
      <SwiperSlide><h1>Slide 1</h1></SwiperSlide>
>>>>>>> 834e07f4e9066de8291f5086f0abcffbeec7e831
    </Swiper>
      <button class='rbtn1'><SlArrowRight /></button>

    </>
  );
};

export default ProductPage;
