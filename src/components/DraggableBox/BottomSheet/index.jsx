import React, { useState, useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { RiArrowUpSLine, RiArrowDownSLine, } from 'react-icons/ri';
import styles from './index.module.scss'

function usePrevious(value) {
  const previousValueRef = useRef();
  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);
  return previousValueRef.current;
}


const BottomSheet = ({ isClosed, setIsClosed, currentVideo
  , setCurrentVideo, setMuted }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);


  const handleClickAnser = () => {
    setIsClosed(true)
    setIsCorrect(true)
  }

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
      setIsCorrect(true);
    } else {
      controls.start("visible");
      onOpen(false);
    }
  }


  function onDragEnd2(event, info) {
    // Close menu if dragged down by more than 50px or dragged down quickly
    const shouldClose = info.point.y > 394.20001220703125 || info.velocity.y > 394.20001220703125;
    // const shouldClose = info.point.y > 2 || info.velocity.y > 2000000000;

    console.log(info.point.y, 'shouldClose')
    if (shouldClose) {
      controls.start("hidden");
      setIsCorrect(false);
    } else {
      controls.start("visible");
      setIsCorrect(true);
    }
  }


  useEffect(() => {
    if (isCorrect) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isCorrect]);


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
  console.log(isClosed, 'iSCLOSEDD')
  const handleDoubleClick = (e) => {
    switch (e.detail) {
      case 1:
        // console.log("click");
        break;
      case 2:
        if (!prevIsOpen && isOpen) {
          controls.start("hidden");
          setIsOpen(false);
        } else if (prevIsOpen && !isOpen) {
          controls.start("visible");
          setIsOpen(true);
        }

        break;

      default:
        return;
    }
  };

  return (
    <>

      {isCorrect === true &&
        <motion.div
          drag="y"
          onDragEnd={onDragEnd2}
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
            hidden: { y: "100%" },  // Closed state, pushes it out of the screen
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
            overflow: "hidden",
            zIndex: 1000
          }}

          id='menu'

          dir='rtl'
        >

          <div className="Navbar">
            <div className="ButtonGroup">

              <span className="CloseIcon" onClick={() => setIsCorrect(false)}>
                <IoClose />
              </span>
            </div>



          </div>



          <div className={styles.menu_container}>

            <div className={styles.question2}>
              <h2> رائع</h2>

              <span>الاجابة صحيحة</span>
            </div>


          </div>

        </motion.div>

      }




      <motion.div
        drag="y"
        onDragEnd={onDragEnd}
        initial="hidden"
        animate={controls}
        className={'bottom_sheet_container'}
        id='menu'
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 400
        }}
        variants={{
          // hidden: { y: "calc(100% - 256px)" },
          // visible: { y: "10%" },
          visible: { y: 104 },
          // hidden: { y: "70%" },
          hidden: { y: "80%" },
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


        <div className={styles.menu_container}>

          <div className={styles.question}>
            <h2> اختبار المعلومات</h2>

            <span>أين تقع قصور عروة ؟</span>
          </div>
          <div className={styles.options}>
            <ul>
              <li onClick={handleClickAnser}>

                <button >تبوك</button>

              </li >
              <li onClick={handleClickAnser}>


                <button >المدينة المنورة</button>


              </li>



              <li onClick={handleClickAnser}>


                <button >الطائف</button>


              </li>
            </ul>
          </div>

        </div>
      </motion.div >



    </>
  )
}

export default BottomSheet