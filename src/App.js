import React from 'react' 
import Banner from './Banner';

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
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Support </a></li> 
        </ul> 
        </div>   
      <img src="/image/logo.pdf.jpg" alt='image1' id='foto'></img> 
       <h1>BBS</h1>
      </header>
      </div>
    <Banner title={"BB Sports: Your Ultimate Destination for Cricket Gear "} urlimage={"/image/logo.pdf.jpg"}/> 
    </>
  );
}

export default App;
