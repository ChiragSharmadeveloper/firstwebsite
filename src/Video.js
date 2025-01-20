import React from 'react'
import './Video.css'

const VideoPlayer = () => {
  return (
    <>
    <div className="video-main">
      <div className='video-item'>
      <video controls muted  width="250px" height="500px">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      </div>
      <div className='video-item'>
      <video controls muted width="250px" height="500px">
        <source src="/videos/video2.mp4" type="video/mp4" />
      </video>
      </div>
      <div className='video-item'>
      <video controls muted  width="250px" height="500px" >
        <source src="/videos/video3.mp4" type="video/mp4" />
      </video>
      </div>
    </div>
    </>
  );
};

export default VideoPlayer;