import React, { useState, useEffect } from 'react';
import Header from './Header';
import Banner from './Banner';
import VideoPlayer from './Video';
import Footer from './Footer';
import"./index.css";
import Navbar from './Components/Navbar';
import About from './About';
import Contact from './contact/Contact';
import { Routes,Route } from 'react-router-dom';
import ProductPage from './products/Product';
import { BeatLoader } from 'react-spinners';




function  App() {

  const[loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>

<div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <BeatLoader color="#3498db" loading={loading} size={15} />
        </div>
      ) : (
        <div>
          
        </div>
      )}
    </div>


<Header/>
<Navbar/>
<Routes>
 <Route path="/" element={<Banner/>}/>
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/Products" element={<ProductPage/>} />
      <Route path="/" element={<VideoPlayer/>} />
</Routes>

<Footer/>

    </>
  );
}

export default App;
