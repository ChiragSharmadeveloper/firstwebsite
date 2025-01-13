import React from 'react' 
import Card from './Card';
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
        <button>Menu</button>
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
      <div className="card">
    <Card image={"/image/kit.jpg.jpg"} title={"Full Kit"}/>
    <Card/>

    <Card/>

    <Card/>

    <Card/>

    <Card/>

    <Card/>

    <Card/>

    </div>

    </>
  );
}

export default App;
