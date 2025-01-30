import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './about/About';
import HomePage from './home/Home';
import ProductPage from './products/Product';
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
      <h1><a href="/App.js">BBS</a></h1>   
      <img src="/image/logo.pdf.jpg" alt='image1' id='foto'></img> 
      <i class="fa-solid fa-user" id='login'></i>
      </header>
      <Router>
      <div className="header2">
          
          <ul>
          <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>

          <Routes>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>

        </div>

        </Router>
        
        </div>

    <Banner title={"BB Sports: Your Ultimate Destination for Cricket Gear "} urlimage={"/image/logo.pdf.jpg"}/> 
  <VideoPlayer/>
<Footer/>

    </>
  );
}

export default App;
