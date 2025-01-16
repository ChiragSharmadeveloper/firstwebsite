import React from 'react'
import Card from './Card'
import Video from './Video'
import './App.css'

const Banner = ({title , urlimage}) => {
  return (
    <><div className='banner'>
      <div>
        <h1>{title}</h1>
        <p>Welcome to BB Sports, your one-stop shop for all things cricket. As passionate cricket enthusiasts, we understand the importance of quality equipment in enhancing performance on the field. Whether you're a beginner or a seasoned pro, we offer a wide range of cricket products designed to suit players of all levels.

        At BB Sports, we specialize in providing top-of-the-line cricket gear, including bats, balls, pads, gloves, clothing, and accessories. Our carefully curated collection features the best brands in the industry, ensuring durability, performance, and comfort. We also offer personalized advice to help you choose the right equipment based on your playing style and preferences.

        Customer satisfaction is at the heart of everything we do. We aim to offer an exceptional shopping experience, whether you're purchasing for yourself, your team, or a cricket academy. With fast shipping, competitive prices, and excellent customer support, BB Sports is committed to providing cricket lovers with the best products and service.

        Join the BB Sports family today, and take your cricket game to the next level with the finest equipment available. Your cricket journey starts here!</p>
      </div>
      <div>
        <img src={urlimage} id="foto2"/>
      </div>
      </div>

      <div className='cardholder'>
    <Card image={"/image/bag 2.jpg"} title1={"BAGS"} id="card1"/>
    <Card image={"/image/tennis b.jpg"} title1={"TENNIS BATS"} id="card2"/>
    <Card image={"/image/PP2.jpg"} title1={"BATTING PADS"} id="card3"/>
    <Card image={"/image/limited gloves.jpg"} title1={"BAGS"} id="card4"/>
    </div>
    {/* <div className='imgform'>
      <img src='/image/PP 1.jpg' id='img1'></img>
      <img src='/image/PP2.jpg' id='img1' ></img>
      <img src='/image/PP3.jpg' id='img1'></img>
      
      <img src='/image/test pro 1.jpg' id='img1'></img>
      <img src='/image/test pro 2.jpg' id='img1' ></img>
      <img src='/image/test pro 3.jpg' id='img1'></img>
    
    </div> */}
      <h1 id='believe'> ————  BELIEVE IN YOUR SELF  ————</h1>
    <div className="image-main">
    <div className="image-container"></div>
    <div className="image-container"></div>
    <div className="image-container"></div>
    </div>
    <Video/>
    </>
    )
}

export default Banner
