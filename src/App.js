import React from 'react';
import Banner from './Banner';
import VideoPlayer from './Video';
import Footer from './Footer';
import"./index.css";
// import Link from 'next/link';
import { Link } from 'react-router-dom';


function App() {
  return (
    <>
     <div className="App">
      <header className="App-header">
      <h1><a href="/App.js" id='bbs'>BBS</a></h1>   
      <img src="/image/white.png" alt='image1' id='foto'></img> 
      <i class="fa-solid fa-user" id='login'></i>
      </header>
      <div className="header2">
          
          <ul>
          <li>Home</li>
            {/* <li><Link href="/about">About</Link></li>
            <li><Link href="/products">Products</Link></li> */}
          </ul>
<<<<<<< HEAD
          </div>
=======
</div>
>>>>>>> 5b0e94c8fe32680276ba0d72c471d97140fc9c80
        

    <Banner title={"BB Sports: Your Ultimate Destination for Cricket Gear "} urlimage={"/image/transperent logo.png"}/> 
  <VideoPlayer/>
<Footer/>

    </>
  );
}

export default App;
