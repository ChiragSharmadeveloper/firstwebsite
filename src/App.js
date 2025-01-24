import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './about/About';
import HomePage from './home/Home';
import Banner from './Banner';
import VideoPlayer from './Video';
import Footer from './Footer';
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
            
          <Route path="/" element={<home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="homePage" element={<HomePage/>}/>
          </Routes>
      </BrowserRouter>
        </div>   
      <img src="/image/logo.pdf.jpg" alt='image1' id='foto'></img> 
       
      <a href='#'><i class="fa-solid fa-user" id='login'></i></a>
      </header>
      
    <Banner title={"BB Sports: Your Ultimate Destination for Cricket Gear "} urlimage={"/image/logo.pdf.jpg"}/> 
  <VideoPlayer/>
  </div>
<Footer/>
    </>
  );
}

export default App;
