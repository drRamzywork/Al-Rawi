import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from "framer-motion";
import styles from './index.module.scss'
import { IoClose } from "react-icons/io5";
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpDoubleFill } from "react-icons/ri";

function BottomSheet({ isClosed, setIsClosed, currentVideo
  , setCurrentVideo }) {
  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen(false);
  }

  function onOpen() {
    setIsOpen(true);
  }

  function onToggle() {
    setIsOpen(!isOpen);
  }

  const prevIsOpen = usePrevious(isOpen);
  const controls = useAnimation();

  function onDragEnd(event, info) {
    const shouldClose =
      info.velocity.y > 20 || (info.velocity.y >= 0 && info.point.y > 45);
    if (shouldClose) {
      controls.start("hidden");
      onClose();
    } else {
      controls.start("visible");
      onOpen();
    }
  }

  useEffect(() => {
    if (prevIsOpen && !isOpen) {
      controls.start("hidden");
    } else if (!prevIsOpen && isOpen) {
      controls.start("visible");
    } else if (isClosed) {
      controls.start("closed");
    } else if (!isClosed) {
      controls.start("hidden");
    }
  }, [controls, isOpen, isClosed, prevIsOpen]);

  const handleDoubleClick = (e) => {
    switch (e.detail) {
      case 1:
        // console.log("click");
        break;
      case 2:
        if (!prevIsOpen && isOpen) {
          controls.start("hidden");
          setIsOpen(false);
          // console.log("double click visible");
        } else if (prevIsOpen && !isOpen) {
          controls.start("visible");
          setIsOpen(true);

          // console.log("double click hidden");
        }

        break;

      default:
        return;
    }
  };

  return (
    <motion.div
      drag="y"
      onDragEnd={onDragEnd}
      initial="hidden"
      animate={controls}
      className={'bottom_sheet_container'}

      transition={{
        type: "spring",
        damping: 40,
        stiffness: 400
      }}
      variants={{
        // hidden: { y: "calc(100% - 256px)" },
        // visible: { y: "10%" },
        visible: { y: 104 },
        hidden: { y: "70%" },
        closed: { y: "100%" }


      }}
      dragConstraints={{ top: 0 }}
      dragElastic={0.2}
      style={{
        display: "inline-block",
        backgroundColor: "white",
        width: 320,
        height: 768,
        border: "1px solid #E0E0E0",
        boxShadow:
          "0px 2px 5px rgba(0, 0, 0, 0.06), 0px 2px 13px rgba(0, 0, 0, 0.12)",
        borderRadius: "13px 13px 0px 0px",
        overflow: "hidden",
        zIndex: 1000
      }}
    >
      <div className="DragHandleEdge" onClick={handleDoubleClick}>
        <div className="DragHandle" />
      </div>
      <div className="Navbar">
        <span className="Title">أسئلة أخرى</span>
        <div className="ButtonGroup">
          <span className="ButtonExpandCollapse" onClick={onToggle}>
            <span className="IconExpandCollapse"> {isOpen ? <RiArrowDownSLine /> : <RiArrowUpSLine />}</span>
            <span className="LabelExpandCollapse">
              {isOpen ? "اغلاق" : "فتح"}
            </span>
          </span>
          <span className="CloseIcon" onClick={() => setIsClosed(true)}>
            <IoClose />
          </span>
        </div>



      </div>

      <div className="btns_container">

        <button className={currentVideo === 'https://toot.one/rawai/2.mp4' ? 'active' : ''}
          onClick={() => { setCurrentVideo('https://toot.one/rawai/2.mp4'); setIsClosed(true) }}> الى أي العصور يعود قصر عروة ؟</button>
        <button className={currentVideo === 'https://toot.one/rawai/3.mp4' ? 'active' : ''}
          onClick={() => { setCurrentVideo('https://toot.one/rawai/3.mp4'); setIsClosed(true) }}> أين تقع قصور عروة بن الزبير ؟</button>
        <button className={currentVideo === 'https://toot.one/rawai/4.mp4' ? 'active' : ''}
          onClick={() => { setCurrentVideo('https://toot.one/rawai/4.mp4'); setIsClosed(true) }}>ما هي أهم المعالم الأثرية ف قصور عروة بن الزبير ؟</button>
      </div>

    </motion.div >
  );
}

function usePrevious(value) {
  const previousValueRef = useRef();

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return previousValueRef.current;
}

const DraggableBox = () => {
  const [isClosed, setIsClosed] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('https://toot.one/rawai/1.mp4');
  const [muted, setMuted] = useState(true); // Start muted initially




  const videoRef = useRef(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //   }
  // }, [currentVideo]);


  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Error attempting to play:', error);
      });
    }
  }, [currentVideo]);

  // Unmute the video on user interaction
  const handleUnmute = () => {
    if (videoRef.current) {
      setMuted(false); // Unmute video
      videoRef.current.muted = false;
      videoRef.current.play(); // Replay to trigger audio
    }
  };

  const handleVideoEnd = () => {
    if (currentVideo === '1') {
      setIsSheetOpen(true);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "white",
        borderRadius: 10,
        width: 320,
        height: "90vh",
        maxHeight: 728,
        overflowY: "hidden",
        filter:
          "drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.18)) drop-shadow(0px 8px 13px rgba(0, 0, 0, 0.06)) drop-shadow(0px 13px 34px rgba(0, 0, 0, 0.12))"
      }}
    >

      <div className={styles.video_container} onClick={handleUnmute}>
        {/* <span className="Title">Untitled demo</span> */}
        {/* <span className="Caption">All changes saved</span> */}

        <video
          ref={videoRef}
          className={styles.videoElement}
          src={`${currentVideo}`}
          onEnded={handleVideoEnd}
          controls
          playsInline
          autoPlay
        />

      </div>
      <button className="ButtonOpenSheet" onClick={() => setIsClosed(false)}>
        <RiArrowUpDoubleFill />
      </button>
      <BottomSheet isClosed={isClosed} setIsClosed={setIsClosed} currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo} />
    </div>
  )
}

export default DraggableBox



