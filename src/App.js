import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import VideoPlayer from './Video';
import Footer from './Footer';
import"./index.css";
import HomePage from './home/Home';
// import Link from 'next/link';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import ProductPage from './products/Product';


function App() {
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>

<div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <BeatLoader color="#3498db" loading={loading} size={15} />
        </div>
      ) : (
        <div></div>
      )}
    </div>

     <div className="App">
      <header className="App-header">
      <h1><a href="/App.js" id='bbs'>BBS</a></h1>   
      <img src="/image/white.png" alt='image1' id='foto'></img> 
      <i class="fa-solid fa-user" id='login'></i>
      </header>
      <div className="header2">
          <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />}/>
      <Route path="/products/Product.js" element={<ProductPage/>}/>
    </Routes>
  </BrowserRouter>
          </div>
          

   
</div>
<Banner title={"BB Sports: Your Ultimate Destination for Cricket Gear "} urlimage={"/image/transperent logo.png"}/> 
  <VideoPlayer/>
<Footer/>
    </>
  );
}

export default App;
