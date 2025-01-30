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
              <h2>BB SPORTS SPACE</h2>
            <li><a href="">UTTAR PARDESH , MEERUT</a></li>
            <li><a href="#">GUJRAT , BHAVNAGAR</a></li>
            <li><a href="#">NEW DELHI , CHIRAG DELHI</a></li>
            <li><a href="#">COMING SOON....</a></li>
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
            <li><a href="http://wa.me/918401003634" target='_blank'>+91 8401003634 </a></li>
            <li><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">babitasports5@gmail.com</a></li>
        </ul>
        <ul>
            <h1>Subscribe</h1>
            <form action="/submit" method="post">
            <input id='email' type="email" value=" " placeholder="Enter your email"></input><br/>
            <button type="submit" id='submit'>Submit</button>
            </form>
            <div>
            <a href='https://www.facebook.com/share/1AJjxYevrE/?mibextid=wwXIfr' target="_blank"><i><FaFacebook /></i></a>
             <i><ImTwitter /></i>
            <a href="https://www.instagram.com/babita_sports?igsh=MTBydXR0NzEzNHhhOQ==" target="_blank"><i ><FaInstagram /></i></a>
            <i><FaLinkedinIn /></i>
            <a href="https://youtube.com/@babitasports?si=BeoSVuQIT6tjKiiJ" target="_blank"><i><AiOutlineYoutube /></i></a>
        </div>
        </ul>
        </div>
      
      <div className='lastfoot'>
        <h1 id='lastfoot1'> BABITA BHARDWAJ SPORTS</h1>
        <i class="fa-solid fa-registered" > 2019 | Design  Partners  :  Abhay  &  Team</i>
        <i class="fa-solid fa-copyright"  > copyright   BABITA   BHARDWAJ   SPORTS</i>
      </div>
      </footer>
    </>
  )
}
export default Footer