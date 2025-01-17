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
            <li><a href="#">Company</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Get started</a></li>
        </ul>
        <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">New Arrival</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Payments Policy</a></li>
        </ul>
        <ul>
            <li><a href="#">Legal & Privacy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookies Policy</a></li>
            <li><a href="#">Website Disclaimer</a></li>
            <li><a href="#">Terms and Conditions</a></li>
        </ul>
        <ul>
            <li><a href="#">Courses</a></li>
            <li><a href="#">HTML & CSS</a></li>
            <li><a href="#">Javascript</a></li>
            <li><a href="#">Photography</a></li>
            <li><a href="#">Photoshop</a></li>
        </ul>
        <ul>
            <li>Subscribe</li>
            <input type="email" value=" " height="30px" width="25px" placeholder="Enter your email"></input><br/>
            <i><FaFacebook /></i>
   <i><ImTwitter /></i>
 <a href="https://www.instagram.com/babita_sports?igsh=MTBydXR0NzEzNHhhOQ==" target="_blank"><i ><FaInstagram /></i></a>
  <i><FaLinkedinIn /></i>
  <a href="https://youtube.com/@babitasports?si=BeoSVuQIT6tjKiiJ" target="_blank"><i><AiOutlineYoutube /></i></a>
        </ul>
      </div>
      </footer>
    </>
  )
}
export default Footer