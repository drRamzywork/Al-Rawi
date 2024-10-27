import React, { useEffect, useRef } from 'react'
import styles from './index.module.scss';

const VideoComponent = ({ currentVideo, muted
  , setMuted, isClosed, setIsClosed, showElements, setShowElements,
  showNewMenu, setShowNewMenu
  , }) => {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    // setIsClosed(false);
    // setShowElements(true);
    setShowElements(true);

    videoRef.current.pause();

  };
  const handleUnmute = () => {
    if (videoRef.current) {
      setMuted(false)

      videoRef.current.play();
      if (muted === true) {
        // videoRef.current.muted = false;
      }

    }
  };



  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
      videoRef.current.play().catch((error) => {
        console.error('Autoplay failed:', error);
      });



      // if (isClosed === false) {
      //   videoRef.current.pause();
      // }

      // if (showElements === true) {
      //   videoRef.current.pause();
      // }
      if (showNewMenu === true) {
        videoRef.current.pause();
      }


      if (showElements === true) {
        videoRef.current.pause();
      }


    }

  }, [currentVideo, muted, isClosed, showElements, showNewMenu]);



  // Show MenuLogic

  // useEffect(() => {

  //   const handleTimeUpdate = (event) => {
  //     const currentTime = event.target.currentTime;
  //     // const currentTime = Math.floor(event.target.currentTime);
  //     console.log(currentTime, "currentTime")
  //     // Set showElements to true only if the current time is near 5 seconds
  //     // if (currentTime >= 4.9 && currentTime <= 5.1) {
  //     if (currentTime >= 9.9 && currentTime <= 10.1) {
  //       // if (currentTime === 10) {
  //       // setShowElements(true);
  //       setIsClosed(false);
  //       setShowNewMenu(true)
  //     }




  //   };

  //   const video = videoRef.current;
  //   if (video) {
  //     video.addEventListener('timeupdate', handleTimeUpdate);
  //   }

  //   return () => {
  //     if (video) {
  //       video.removeEventListener('timeupdate', handleTimeUpdate);
  //     }
  //   };
  // }, [setShowElements, currentVideo, setShowNewMenu]);




  return (
    <>
      <div className={styles.video_container} onClick={handleUnmute}>
        <video
          key={currentVideo}
          ref={videoRef}
          className={styles.videoElement}
          src={currentVideo}
          controls
          autoPlay
          playsInline
          onEnded={handleVideoEnd}
        />
      </div>

    </>
  )
}

export default VideoComponent



// +++++++++++++++++++++++++++++++
