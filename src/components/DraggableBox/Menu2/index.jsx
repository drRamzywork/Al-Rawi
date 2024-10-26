// import React, { useEffect, useRef, useState, } from 'react'
// import { motion, useAnimation } from 'framer-motion';
// import { IoClose } from 'react-icons/io5';
// import styles from './index.module.scss';
// import CorrectMenu from '../CorrectMenu';



// const Menu2 = ({
//   showNewMenu
//   , setShowNewMenu,
//   setCurrentVideo,
//   setIsClosed,
//   setMuted, }) => {
//   const [isCorrect, setIsCorrect] = useState(false); //Change it to false

//   const controls = useAnimation();

//   function onClose() {
//     setShowNewMenu(false);
//   }

//   const handleClickAnser = () => {
//     setIsCorrect(true)
//     setShowNewMenu(false)
//     console.log(showNewMenu)
//   }

//   function onDragEnd(event, info) {
//     // Close menu if dragged down by more than 50px or dragged down quickly
//     const shouldClose = info.point.y > 394.20001220703125 || info.velocity.y > 394.20001220703125;
//     // const shouldClose = info.point.y > 2 || info.velocity.y > 2000000000;



//     if (shouldClose) {
//       controls.start("hidden");
//       setIsCorrect(true);
//     } else {
//       controls.start("visible");
//       onOpen(false);
//     }
//   }

//   useEffect(() => {
//     if (showNewMenu) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [controls, showNewMenu]);

//   return (

//     <>
//       {isCorrect === true &&
//         <CorrectMenu controls={controls} isCorrect={isCorrect} setIsCorrect={setIsCorrect} />
//       }

//       <motion.div
//         drag="y"
//         onDragEnd={onDragEnd}
//         initial="hidden"
//         animate={controls}
//         className={'bottom_sheet_container'}
//         transition={{
//           type: "spring",
//           damping: 40,
//           stiffness: 400
//         }}
//         variants={{
//           visible: { y: 0 },
//           hidden: { y: "130%" },  // Closed state, pushes it out of the screen
//         }}
//         dragConstraints={{ top: 0 }}
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
//           // overflow: "hidden",
//           zIndex: 1000
//         }}
//         id='menu'
//         dir='rtl'
//       >


//         <div className="Navbar">
//           <div className={styles.img_container}>
//             <img src="/assets/imgs/002.png" alt="" />
//           </div>

//           <div className="ButtonGroup">

//             <span className="CloseIcon" onClick={() => setShowNewMenu(true)}>
//               <img src="/assets/imgs/003.png" alt="" />
//             </span>
//           </div>
//         </div>


//         <div className={styles.menu_container}>

//           <div className={styles.question}>
//             <h2> اختبار المعلومات</h2>

//             <span>أين تقع قصور عروة ؟</span>
//           </div>

//           <div className={styles.options}>
//             <ul>
//               <li onClick={handleClickAnser}>

//                 <button >تبوك</button>

//               </li >
//               <li onClick={handleClickAnser}>


//                 <button >المدينة المنورة</button>


//               </li>
//               <li onClick={handleClickAnser}>


//                 <button >الطائف</button>


//               </li>
//             </ul>
//           </div>

//         </div>
//       </motion.div>
//     </>
//   )
// }

// export default Menu2;



// import React, { useEffect, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import styles from './index.module.scss';
// import CorrectMenu from '../CorrectMenu';

// const Menu2 = ({
//   showNewMenu,
//   setShowNewMenu
// }) => {
//   const [isCorrect, setIsCorrect] = useState(false);
//   const controls = useAnimation();

//   function onClose() {
//     setShowNewMenu(false);
//   }
//   function onOpen() {
//     setShowNewMenu(true);
//   }

//   const handleClickAnswer = () => {
//     setIsCorrect(true);
//     setShowNewMenu(false);
//     console.log(isCorrect, "showNewMenu");
//   };

//   function onDragEnd(event, info) {
//     const shouldClose = info.point.y > 394.2 || info.velocity.y > 394.2;

//     if (shouldClose) {
//       controls.start('hidden');
//       setIsCorrect(true);
//     } else {
//       controls.start('visible');
//       onOpen(false);
//     }
//   }

//   useEffect(() => {
//     if (showNewMenu) {
//       controls.start('visible');
//     } else {
//       controls.start('hidden');
//     }
//   }, [controls, showNewMenu]);

//   return (
//     <>
//       {isCorrect && (
//         <CorrectMenu isCorrect={isCorrect} setIsCorrect={setIsCorrect} />
//       )}
// <div className={styles.layer} />


//       {isCorrect === false &&
//         <>
//           <motion.div
//             drag="y"
//             onDragEnd={onDragEnd}
//             initial="hidden"
//             animate={controls}
//             className={`bottom_sheet_container ${styles.container}`}
//             transition={{
//               type: 'spring',
//               damping: 40,
//               stiffness: 400,
//             }}
//             variants={{
//               visible: { y: 0 },
//               hidden: { y: '130%' },
//             }}
//             dragConstraints={{ top: 0 }}
//             dragElastic={0.05}
//             style={{
//               paddingBottom: '24px',
//               position: 'fixed',
//               top: '20%',
//               left: '0%',
//               transform: 'translateY(-50%)', // Center horizontally and vertically
//               display: 'inline-block',
//               backgroundColor: 'red',
//               width: '80%', // Adjust width as needed
//               maxWidth: '600px', // Set a max-width to avoid filling the entire screen
//               height: 'fit-content',
//               border: '1px solid #E0E0E0',
//               boxShadow:
//                 '0px 2px 5px rgba(0, 0, 0, 0.06), 0px 2px 13px rgba(0, 0, 0, 0.12)',
//               borderRadius: '13px',
//               zIndex: 1000,

//             }}
//             id="menu"
//             dir="rtl"
//           >
//             <div className="Navbar">
//               <div className={styles.img_container}>
//                 <img src="/assets/imgs/002.png" alt="" />
//               </div>

//               <div className="ButtonGroup">
//                 <span className="CloseIcon" onClick={() => setShowNewMenu(false)}>
//                   <img src="/assets/imgs/003.png" alt="" />
//                 </span>
//               </div>
//             </div>

//             <div className={styles.menu_container}>
//               <div className={styles.question}>
//                 <h2>أين تقع قصور عروة؟</h2>
//               </div>

//               <div className={styles.options}>
//                 <ul>
//                   <li onClick={handleClickAnswer}>
//                     <button>تبوك</button>
//                   </li>
//                   <li onClick={handleClickAnswer}>
//                     <button>المدينة المنورة</button>
//                   </li>
//                   <li onClick={handleClickAnswer}>
//                     <button>الطائف</button>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </motion.div>
//         </>

//       }

//     </>
//   );
// };

// export default Menu2;
// ++++++++++++++++++++++++++++++++++

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './index.module.scss';
import CorrectMenu from '../CorrectMenu';

const Menu2 = ({ showNewMenu, setShowNewMenu }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (showNewMenu) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, showNewMenu]);

  const handleClickAnswer = () => {
    setIsCorrect(true);
    setShowNewMenu(false);
  };

  return (
    <>
      {isCorrect && (
        <CorrectMenu isCorrect={isCorrect} setIsCorrect={setIsCorrect} />
      )}

      {!isCorrect && (
        <>
          {showNewMenu &&
            <div className={styles.layer} />
          }
          <motion.div
            initial="hidden"
            animate={controls}
            className={` ${styles.container}`}
            transition={{
              type: 'spring',
              damping: 40,
              stiffness: 400,
            }}
            variants={{
              visible: { y: '20%', opacity: 1 },
              hidden: { y: '-100%', opacity: 0 },
            }}
            style={{
              position: 'fixed',
              top: '21%',
              left: '6%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              maxWidth: '600px',
              border: '1px solid #E0E0E0',
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.06), 0px 2px 13px rgba(0, 0, 0, 0.12)',
              borderRadius: '13px',
              zIndex: 1000,
            }}
            id="menu"
            dir="rtl"
          >
            <div className="Navbar">
              <div className={styles.img_container}>
                <img src="/assets/imgs/002.png" alt="" />
              </div>
              <div className="ButtonGroup">
                <span className="CloseIcon" onClick={() => setShowNewMenu(false)}>
                  <img src="/assets/imgs/003.png" alt="" />
                </span>
              </div>
            </div>

            <div className={styles.menu_container}>
              <div className={styles.question}>
                <h2>أين تقع قصور عروة؟</h2>
              </div>
              <div className={styles.options}>
                <ul>
                  <li onClick={handleClickAnswer}>
                    <button>تبوك</button>
                  </li>
                  <li onClick={handleClickAnswer}>
                    <button>المدينة المنورة</button>
                  </li>
                  <li onClick={handleClickAnswer}>
                    <button>الطائف</button>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </>

      )}
    </>
  );
};

export default Menu2;
