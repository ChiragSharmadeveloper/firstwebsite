import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './about/About';
import HomePage from './home/Home';
import Banner from './Banner';
import VideoPlayer from './Video';
import Footer from './Footer';
import LogIn from './Login';
import"./index.css";

function App() {
  return (
    <>
     <div className="App">
      <header className="App-header">
        <div className="dropdown">
        <h1>BBS</h1>
          <BrowserRouter>
          <Routes>
          <Route path="/" element={<home/>}/>home
          <Route path="About" element={<About/>}/>About
          <Route path="homePage" element={<HomePage/>}/>Products
          </Routes>
      </BrowserRouter>
        </div>   
      <img src="/image/logo.pdf.jpg" alt='image1' id='foto'></img> 
      <i class="fa-solid fa-user" id='login'></i>
      </header>
      
    <Banner title={"BB Sports: Your Ultimate Destination for Cricket Gear "} urlimage={"/image/logo.pdf.jpg"}/> 
  <VideoPlayer/>
  </div>
<Footer/>
    </>
  );
}

export default App;
