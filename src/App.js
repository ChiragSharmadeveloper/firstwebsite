import React, { useState, useEffect } from 'react';
import Header from './Header';
import Banner from './Banner';
import VideoPlayer from './Video';
import Footer from './Footer';
import"./index.css";
// import Link from 'next/link';
import { BeatLoader } from 'react-spinners';

function App() {
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
        <div></div>
      )}
    </div>

     <div className="App">     
<Header/>
</div>
<Banner title={"BB Sports: Your Ultimate Destination for Cricket Gear "} urlimage={"/image/transperent logo.png"}/> 
  <VideoPlayer/>
<Footer/>
    </>
  );
}

export default App;
