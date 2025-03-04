import react from 'react'
import Card from './Card'
import MovingText from './Selfbelieve';
import './App.css'

const Banner = ({title , urlimage}) => {
  return (
      <> 
      
      <div className='banner'>
      <div>
        <h1>{title}</h1>
        <h4>Welcome to BB Sports, your one-stop shop for all things cricket. As passionate cricket enthusiasts, we understand the importance of quality equipment in enhancing performance on the field. Whether you're a beginner or a seasoned pro, we offer a wide range of cricket products designed to suit players of all levels.

        At BB Sports, we specialize in providing top-of-the-line cricket gear, including bats, balls, pads, gloves, clothing, and accessories. Our carefully curated collection features the best brands in the industry, ensuring durability, performance, and comfort. We also offer personalized advice to help you choose the right equipment based on your playing style and preferences.

        Customer satisfaction is at the heart of everything we do. We aim to offer an exceptional shopping experience, whether you're purchasing for yourself, your team, or a cricket academy. With fast shipping, competitive prices, and excellent customer support, BB Sports is committed to providing cricket lovers with the best products and service.

        Join the BB Sports family today, and take your cricket game to the next level with the finest equipment available. Your cricket journey starts here!</h4>
       
      </div>
      <div>
        <img src={urlimage} id="foto2"/>
      </div>
      </div>
      
      <div className='cardholder'>
    <Card image={"/image/bag 2.jpg"} title1={"BAGS"} id="card1"/>
    <Card image={"/image/tennis b.jpg"} title1={"TENNIS BATS"} id="card1"/>
    <Card image={"/image/PP2.jpg"} title1={"BATTING PADS"} id="card1"/>
    <Card image={"/image/limited gloves.jpg"} title1={"GLOVES"} id="card1"/>
    <Card image={"/image/KASHMIRI BAT.jpg"} title1={"KASHMIRI WILLOW"} id="card1"/>
    <Card image={"/image/english bat.jpg"} title1={"ENGLISH WILLOW"} id="card1"/>
    <Card image={"/image/full kit.jpg"} title1={"FULL KIT"} id="card1"/>
    <Card image={"/image/ball.jpg"} title1={"BALLS"} id="card1"/>
    </div>

    
      <h1 id='believe'> ————  BELIEVE IN YOUR SELF  ————</h1>
    <div className="image-main">
    <div className="image-container"></div>
    <div className="image-container"></div>
    <div className="image-container"></div>
    </div>
    <div className='banner2'>
      <div className="self">
        <h1 > SELF </h1>
        </div>
        <div className='ketan'>
        <img src="./image/athlete1.jpg" alt="KETAN" id='ketan'/>
      </div>
      <div className='ashish'>
    <img src="./image/athlete2.jpg" alt='ashish chauhan' id='ashish'/>
    </div>
        <div className="believe2">
      <h1> BELIEVE </h1>
      </div>
    </div>
    <MovingText/>
    </>
    );
};

export default Banner;
