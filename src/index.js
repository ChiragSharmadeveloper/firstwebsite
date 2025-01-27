import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Banner from './Banner';
import VideoPlayer from './Video';
import Footer from './Footer';
// import { Link } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Banner title={"BB Sports: Your Ultimate Destination for Cricket Gear "} urlimage={"/image/logo.pdf.jpg"}/> 
  <VideoPlayer/>
  
<Footer/>
  </React.StrictMode>
  
);

reportWebVitals();
