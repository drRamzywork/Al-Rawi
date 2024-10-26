// import React, { useEffect } from 'react'
// import { motion } from 'framer-motion';
// import styles from './index.module.scss'

// const CorrectMenu = ({ controls, isCorrect, setIsCorrect }) => {

//   function onDragEnd2(event, info) {
//     // Close menu if dragged down by more than 50px or dragged down quickly
//     const shouldClose = info.point.y > 394.20001220703125 || info.velocity.y > 394.20001220703125;
//     // const shouldClose = info.point.y > 2 || info.velocity.y > 2000000000;

//     console.log(info.point.y, 'shouldClose')
//     if (shouldClose) {
//       controls.start("hidden");
//       setIsCorrect(false);
//     } else {
//       controls.start("visible");
//       setIsCorrect(true);
//     }
//   }


//   useEffect(() => {
//     if (isCorrect) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [controls, isCorrect]);


//   return (
//     <>
//       <motion.div
//         drag="y"
//         onDragEnd={onDragEnd2}
//         initial="hidden"
//         animate={controls}
//         className={'bottom_sheet_container'}
//         transition={{
//           type: "spring",
//           damping: 40,
//           stiffness: 400
//         }}
//         variants={{
//           visible: { y: 0 },  // Open state
//           hidden: { y: "100%" },  // Closed state, pushes it out of the screen
//         }}
//         dragConstraints={{ top: 0 }}  // Allows dragging only downward
//         dragElastic={0.05}  // Reduces elasticity for smoother drag
//         style={{
//           paddingBottom: "24px",
//           position: "fixed",
//           bottom: 0,
//           left: 0,
//           right: 0,
//           display: "inline-block",
//           backgroundColor: "red",
//           width: "100%",  // Set width to full screen
//           height: "fit-content",  // Dynamically adjust height based on content
//           border: "1px solid #E0E0E0",
//           boxShadow:
//             "0px 2px 5px rgba(0, 0, 0, 0.06), 0px 2px 13px rgba(0, 0, 0, 0.12)",
//           borderRadius: "13px 13px 0px 0px",
//           zIndex: 1000
//         }}
//         id='menu'
//         dir='rtl'
//       >

//         <div className="Navbar">

//           <div className={styles.img_container2}>
//             <img src="/assets/imgs/002.png" alt="" />
//           </div>


//           <div className="ButtonGroup">

//             <span className="CloseIcon" onClick={() => setIsCorrect(false)}>
//               <img src="/assets/imgs/003.png" alt="" />
//             </span>
//           </div>



//         </div>



//         <div className={styles.menu_container}>

//           <div className={styles.question2}>
//             <h2> رائع</h2>

//             <div className={styles.img_container}>
//               <img src="/assets/imgs/001.png" alt="" />
//             </div>


//             <span>الاجابة صحيحة</span>
//           </div>


//         </div>

//       </motion.div>

//     </>
//   )
// }

// export default CorrectMenu



import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './index.module.scss';

const CorrectMenu = ({ isCorrect, setIsCorrect }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isCorrect) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isCorrect]);

  return (
    <>
      <motion.div
        initial="hidden"
        animate={controls}
        className={'bottom_sheet_container'}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 400,
        }}
        variants={{
          visible: { y: 0 },  // Open state
          hidden: { y: "100%" },  // Closed state, pushes it out of the screen
        }}
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
          zIndex: 1000,
        }}
        id='menu'
        dir='rtl'
      >
        <div className="Navbar">
          <div className={styles.img_container2}>
            <img src="/assets/imgs/002.png" alt="" />
          </div>
          <div className="ButtonGroup">
            <span className="CloseIcon" onClick={() => setIsCorrect(false)}>
              <img src="/assets/imgs/003.png" alt="" />
            </span>
          </div>
        </div>
        <div className={styles.menu_container}>
          <div className={styles.question2}>
            <h2>رائع</h2>
            <div className={styles.img_container}>
              <img src="/assets/imgs/001.png" alt="" />
            </div>
            <span>الاجابة صحيحة</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CorrectMenu;
