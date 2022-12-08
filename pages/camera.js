import React, { useState, useRef } from 'react';
import {example} from '../images/example.png';

function camera() {
  const videoRef = useRef(null);
  const overlayImageRef = useRef(null);

  const [showOverlay, setShowOverlay] = useState(true);

  // Function to start the camera
  const startCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch(err => console.error(err));
  };

  // Function to stop the camera
  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => track.stop());
    videoRef.current.srcObject = null;
  };

  return (
    <div>
      <video id="video" width="640" height="480" ref={videoRef} />
      {showOverlay && (
        <img className="sticky top-0 z-50 h-80" 
          src={require('../images/example.png')}
          id="overlay"
          ref={overlayImageRef}
        />
      )}

      <button classname="absolute top-100" onClick={startCamera}>Start Camera</button>
      <button classname="absolute top-100" onClick={stopCamera}>Stop Camera</button>
    </div>
  );
}

export default camera;




// import React, { useRef, useState } from "react";
// import Image from "next/image";
// import example from "../images/example.png";

// function camera() {
//   const videoRef = useRef(null);

//   const [hasPermission, setHasPermission] = useState(false);
//   const [videoError, setVideoError] = useState(null);

//   // Function to ask for permission to access the camera
//   const requestPermission = () => {
//     navigator.mediaDevices
//       .getUserMedia({ video: true, audio: false })
//       .then((stream) => {
//         setHasPermission(true);
//         videoRef.current.srcObject = stream;
//         videoRef.current.play();
//       })
//       .catch((err) => {
//         setVideoError(err);
//         console.error(err);
//       });
//   };

//   return (
//     <div>      
//         <Image  className="sticky top-0 z-50 h-screen"
//       src={example} />
      
//       <video id="video" width="480" height="640" ref={videoRef} />
      
//       {!hasPermission && !videoError && (
//         <button onClick={requestPermission}>Start</button>
//       )}


//       {videoError && <p>{videoError.message}</p>}
//     </div>
//   );
// }

// export default camera;
