import React, { useEffect, useRef, } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import styles from './index.module.scss';
import { CiLocationOn } from "react-icons/ci";
import { MdCalendarMonth } from "react-icons/md";



const Menu = ({
  showElements
  , setShowElements,
  setCurrentVideo,
  setIsClosed,
  setMuted, }) => {

  const controls = useAnimation();

  function onClose() {
    setShowElements(false);
  }

  const handleClickAnser = () => {
    setIsClosed(true)
  }

  function onDragEnd(event, info) {
    // Close menu if dragged down by more than 50px or dragged down quickly
    const shouldClose = info.point.y > 394.20001220703125 || info.velocity.y > 394.20001220703125;
    // const shouldClose = info.point.y > 2 || info.velocity.y > 2000000000;

    console.log(info.point.y, 'shouldClose')
    if (shouldClose) {
      controls.start("hidden");
      setShowElements(false);

      onClose();
    } else {
      controls.start("visible");
    }
  }

  useEffect(() => {
    if (showElements) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, showElements]);

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
        visible: { y: 0 },  // Open state
        hidden: { y: "130%" },  // Closed state, pushes it out of the screen
      }}
      dragConstraints={{ top: 0 }}  // Allows dragging only downward
      dragElastic={0.05}  // Reduces elasticity for smoother drag
      style={{
        paddingBottom: "24px",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "inline-block",
        backgroundColor: "red",
        width: "100%",  // Set width to full screen
        height: "fit-content",  // Dynamically adjust height based on content
        border: "1px solid #E0E0E0",
        boxShadow:
          "0px 2px 5px rgba(0, 0, 0, 0.06), 0px 2px 13px rgba(0, 0, 0, 0.12)",
        borderRadius: "13px 13px 0px 0px",
        // overflow: "hidden",
        zIndex: 1000
      }}
      id='menu'
      dir='rtl'
    >

      <div className="Navbar">


        <div className={styles.img_container}>
          <img src="/assets/imgs/004.png" alt="" />
        </div>


        <div className="ButtonGroup">
          <span className="CloseIcon" onClick={() => setShowElements(false)}>
            {/* <IoClose /> */}
            <img src="/assets/imgs/003.png" alt="" />

          </span>
        </div>
      </div>



      <div className={styles.menu_container}>

        <div className={styles.question}>
          <h2> عن ماذا أروي</h2>
        </div>

        <div className={styles.options}>
          <ul>
            <li onClick={() => { setCurrentVideo('https://toot.one/rawai/ar/3.mp4'); setShowElements(false); setMuted(false) }}>
              <div className={styles.icon_container}>
                <img src="/assets/imgs/location.png" alt="" />

              </div>
              <button >موقع القصر</button>

            </li>

            <li onClick={() => { setCurrentVideo('https://toot.one/rawai/ar/2.mp4'); setShowElements(false); setMuted(false) }}>

              <div className={styles.icon_container}>
                <img src="/assets/imgs/calendar.png" alt="" />

              </div>
              <button >تاريخ بناء القصر</button>


            </li>
          </ul>
        </div>
      </div>

    </motion.div>
  )
}

export default Menu;
