import React from 'react' 
import Banner from './Banner';
import"./index.css"

function App() {
  return (
    <>
     <div className="App">
      <header className="App-header">
      <ul className='nav'>
      <li class="dropdown">
        <button id="men">Menu</button>
        <div class="dropdown-content">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Support </a>
        </div>
      </li>
      </ul>      
       <h1>BBS</h1>
      <img src="/image/logo.pdf.jpg" alt='image1' id='foto'></img>
      
       
      </header>
      </div>
    <Banner title={"THIS IS BB SPORTS "} urlimage={"/image/logo.pdf.jpg"}/> 
    </>
  );
}

export default App;
