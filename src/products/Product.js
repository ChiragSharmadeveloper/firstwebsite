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
    <div className='main'>
      <h1 class='productHead'>All Our Products</h1>
 <button class='lbtn1' ><SlArrowLeft /> Previous</button>
      <button class='rbtn1'><SlArrowRight /> Next</button>
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
      onSlideChange={() => console.log('slide change')}>
      <div class='main'>
      <SwiperSlide>
        <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
        <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>
        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
        <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>
        </div>
        <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
        <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
        <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>
        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
       
      </SwiperSlide>
      <SwiperSlide>
        <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
        <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>

        </SwiperSlide>
      <SwiperSlide>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
        <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
      </SwiperSlide>
      <SwiperSlide>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
        <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
         <div class='classswiper'>
        
        <img src="\image\KASHMIRI bat.jpg" alt='' class='imgproduct' />
         <div class='card-right'>
        <h2> BB Sports Classic Cricket Bat for Mens and Boys (Beige, Size -5) | Material: Kashmir Willow | Lightweight | Free Cover | Ready to Play | for Intermediate Player | Ideal for Leather Ball </h2>
        <p class='Rate'><span class='price'>₹5500/-   </span>₹3500/-</p>
        <button class='cardbutton'>Add To Cart</button> 
        <button class='cardbutton'>More Details</button>
          </div>

        </div>
      </SwiperSlide>
      </div>
    </Swiper>

     
     



    </div>
  );
};

export default ProductPage;
