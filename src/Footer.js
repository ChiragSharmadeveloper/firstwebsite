import React from 'react'
import { FaFacebook } from "react-icons/fa";  
import { ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import './App.css'
const Footer = () => {
  return (
    <>
    <footer className="foot">
      <div className="fot">
        <ul>
            <h2>Get info</h2>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Enquiry</a></li>
        </ul>
        <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">New Arrival</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Payments Policy</a></li>
        </ul>
        <ul>
        <h2>Legal & Privacy</h2>
        <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookies Policy</a></li>
            <li><a href="#">Website Disclaimer</a></li>
            <li><a href="#">Terms and Conditions</a></li>
        </ul>
        <ul>
        <h2>For Enquiry</h2>
            <li><a href="http://wa.me/919997270808" target='_blank'>+91 9997270808 </a></li>
            <li><a href="#"></a></li>
            <li><a href="#">Photography</a></li>
            <li><a href="#">Photoshop</a></li>
        </ul>
        <ul>
            <li>Subscribe</li>
            <input type="email" value=" " height="30px" width="25px" placeholder="Enter your email"></input><br/>
            <a href='https://www.facebook.com/share/1AJjxYevrE/?mibextid=wwXIfr' target="_blank"><i><FaFacebook /></i></a>
   <i><ImTwitter /></i>
 <a href="https://www.instagram.com/babita_sports?igsh=MTBydXR0NzEzNHhhOQ==" target="_blank"><i ><FaInstagram /></i></a>
  <i><FaLinkedinIn /></i>
  <a href="https://youtube.com/@babitasports?si=BeoSVuQIT6tjKiiJ" target="_blank"><i><AiOutlineYoutube /></i></a>
        </ul>
      </div>
      <div className='lastfoot'>
        <h1 id='lastfoot1'> BABITA BHARDWAJ SPORTS</h1>
       <h5> <i class="fa-solid fa-registered" id='regfoot'> 2019 | Design  Partners  :  Abhay  &  Team</i></h5>
       <p> <i class="fa-solid fa-copyright" id='regfoot'> copyright BABITA BHARDWAJ SPORTS</i></p>
      </div>
      </footer>
    </>
  )
}
export default Footer