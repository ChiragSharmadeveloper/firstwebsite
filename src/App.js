import React from 'react' 
import Banner from './Banner';
import VideoPlayer from './Video'
import Footer from './Footer';
import"./index.css"


function App() {
  return (
    <>
     <div className="App">
      <header className="App-header">
        <div className="dropdown">
     <button className="dropbtn" > 
      <i class="fa-solid fa-bars"></i>
     </button>
     <ul class="dropdown-content">
          <li><a href="Page.js/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="https://www.amazon.in/">Contact Us</a></li>
          <li><a href="https://www.amazon.in/">Support </a></li> 
        </ul> 
        </div>   
      <img src="/image/logo.pdf.jpg" alt='image1' id='foto'></img> 
       <h1>BBS</h1>
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
