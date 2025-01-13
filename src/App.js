import React from 'react' 
import"./index.css"

function App() {
  return (
    <>
     <div className="App">
      <header className="App-header">
       <h1>BBS</h1>
      <img src="/image/logo.pdf.jpg" alt='image1' id='foto'></img>
       <ul className='nav'>
        <li class="dropdown">
        <a href="#">Menu</a>
        <div class="dropdown-content">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Support </a>
        </div>
      </li>
       </ul>      
      </header>
    </div>
    </>
  );
}

export default App;
