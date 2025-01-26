import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './about/About';
import HomePage from './home/Home';
import Banner from './Banner';
import VideoPlayer from './Video';
import Footer from './Footer';
// import LogIn from './Login';
import"./index.css";

function App() {
  return (
    <>
     <div className="App">
      <header className="App-header">
      <h1>BBS</h1>
          {/* <BrowserRouter>
          <Routes>
          <Route path="/" element={<home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="HomePage" element={<HomePage/>}/>
          </Routes>
      </BrowserRouter> */}   
      <img src="/image/logo.pdf.jpg" alt='image1' id='foto'></img> 
      <i class="fa-solid fa-user" id='login'></i>
      </header>
      <div className="header2">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </div>
        </div>
    <Banner title={"BB Sports: Your Ultimate Destination for Cricket Gear "} urlimage={"/image/logo.pdf.jpg"}/> 
  <VideoPlayer/>
  
<Footer/>
    </>
  );
}

export default App;
