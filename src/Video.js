import React from 'react'
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
import { useEffect } from 'react'
>>>>>>> Stashed changes
=======
import { useEffect } from 'react'
>>>>>>> Stashed changes
import './Video.css'

const VideoPlayer = () => {
  return (
    <div className="video-main">
      <video controls>
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
     
      <video controls>
        <source src="/videos/video2.mp4" type="video/mp4" />
      </video>
      
      <video controls>
        <source src="/videos/video3.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;