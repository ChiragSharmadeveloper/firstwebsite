import React from 'react'
// import Link from 'next/link';
import ".//index.css";

const Header = () => {
  return (
    <>
    <header className="App-header">
          <h1><a href="/App.js" id='bbs'>BBS</a></h1>   
          <img src="/image/white.png" alt='image1' id='foto'></img> 
          <i class="fa-solid fa-user" id='login'></i>
          </header>
          <div className="header2">
            <ul>
                 <li><a href="/">Home</a></li>
                <li><a href="./about" target="_blank">About Us.</a></li>
                <li><a href="./contact" target="_blank">Contact Us.</a></li>
                <li><a href="./products" target="_blank">Products</a></li>
            </ul>
          </div>
    </>
  )
}

export default Header
