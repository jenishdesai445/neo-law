import React, { useState, useRef } from 'react';
import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Framer Motion components
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const ImageHeroSection = () => {
  // Use a state to track the main box's height.
  // The default value is '100vh'.
  const [isShrunk, setIsShrunk] = useState(false); // Use

  // A function to handle the click event.
  // It checks the current height and toggles it between '100vh' and '30vh'.
  // const handleBoxClick = () => {
  //   setBoxHeight(!boxHeight);
  // };

  return (
    // Attach the onClick event handler to the main container Box.
    // Use the 'boxHeight' state variable for the height property.
    <Box
      position="relative"
      overflow="hidden"
      // height={boxHeight  ? '30vh' : '100vh'}
      // onClick={handleBoxClick}
      transition="height 0.5s ease-in-out" // Add a CSS transition for a smooth animation.
    >
      <Box height={'inherit'}>
        <Image
          src="/image/heroBg.png"
          width={'100%'}
          height={'100%'}
          objectFit={'cover'}
        />
      </Box>
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.4)"
      />
      <Flex
        as={motion.div}
        initial="hidden"
        animate="visible"
        direction="column"
        position={'absolute'}
        zIndex={1}
        top={0}
        align="center"
        justify="center"
        w={'100%'}
        h="100%"
        color="white"
        textAlign="center"
        px={4}
      >
        <Image src="/image/logoWhite.png" />
      </Flex>
    </Box>
  );
};

export default ImageHeroSection;

// import React, { useState, useEffect, useRef } from 'react';
// import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';

// // Framer Motion components
// const MotionHeading = motion(Heading);
// const MotionText = motion(Text);
// const MotionButton = motion(Button);

// const ImageHeroSection = () => {
//   // Use a ref to get a direct reference to the image container
//   const imageContainerRef = useRef(null); // Set the initial stateā

//   const [isShrunk, setIsShrunk] = useState(false); // Use useEffect to add and clean up the scroll event listener

//   // useEffect(() => {
//   //   // Define the scroll handler function
//   //   const handleScroll = () => {
//   //     // Check if the user has scrolled down a certain amount (e.g., 20px)
//   //     const scrolledPast = window.scrollY > 20; // Update the state only if it needs toā change

//   //     if (scrolledPast && !isShrunk) {
//   //       setIsShrunk(true);
//   //     } else if (!scrolledPast && isShrunk) {
//   //       setIsShrunk(false);
//   //     }
//   //   }; // Add the event listener when the component mounts

//   //   window.addEventListener('scroll', handleScroll); // Clean up the event listener when the component unmounts

//   //   return () => {
//   //     window.removeEventListener('scroll', handleScroll);
//   //   };
//   // }, [isShrunk]); // Re-run the effect if isShrunk changes // Use another useEffect to trigger the GSAP animation when isShrunk changes

//   // useEffect(() => {
//   //   if (imageContainerRef.current) {
//   //     gsap.to(imageContainerRef.current, {
//   //       height: isShrunk ? '' : '100vh', // Animate to 600px or back to 100vh
//   //       duration: 0.8, // Set the animation duration
//   //       ease: 'power2.inOut', // Use a smooth easing function
//   //     });
//   //   }
//   // }, [isShrunk]); // Trigger this effect when isShrunk changes

//   // const containerVariants = {
//   //   hidden: { opacity: 0 },
//   //   visible: {
//   //     opacity: 1,
//   //     transition: {
//   //       staggerChildren: 0.1,
//   //     },
//   //   },
//   // };

//   return (
//     <Box position="relative" overflow="hidden">
//       <Box height={'inherit'}>
//         <Image
//           src="/image/heroBg.png"
//           width={'100%'}
//           height={'100%'}
//           objectFit={'cover'}
//         />
//       </Box>
//       <Box
//         position="absolute"
//         top="0"
//         left="0"
//         w="100%"
//         h="100%"
//         bg="rgba(0, 0, 0, 0.4)"
//       />
//       <Flex
//         as={motion.div}
//         // variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         direction="column"
//         position={'absolute'}
//         zIndex={1}
//         top={0}
//         align="center"
//         justify="center"
//         w={'100%'}
//         h="100%"
//         color="white"
//         textAlign="center"
//         px={4}
//       >
//         <Image src="/image/logoWhite.png" />
//       </Flex>
//     </Box>
//   );
// };

// export default ImageHeroSection;
// // import React, { useEffect, useRef } from 'react';
// // import { Box, Flex, Image } from '@chakra-ui/react';
// // import { motion } from 'framer-motion';
// // import { gsap } from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // gsap.registerPlugin(ScrollTrigger);

// // const ImageHeroSection = ({ children }) => {
// //   const imageContainerRef = useRef(null);
// //   const contentRef = useRef(null);

// //   useEffect(() => {
// //     gsap.to(imageContainerRef.current, {
// //       height: '20vh',
// //       ease: 'power2.inOut',
// //       scrollTrigger: {
// //         trigger: imageContainerRef.current,
// //         start: 'top top',
// //         end: '+=500',
// //         scrub: 0.8,
// //         pin: true,
// //         pinSpacing: false,
// //       },
// //     });
// //   }, []);

// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.1,
// //       },
// //     },
// //   };

// //   return (
// //     <Box
// //       ref={imageContainerRef}
// //       position="relative"
// //       overflow="hidden"
// //       height="100vh"
// //     >
// //       <Image
// //         src="/image/heroBg.png"
// //         width={'100%'}
// //         height={'100%'}
// //         objectFit={'cover'}
// //       />
// //       <Box
// //         position="absolute"
// //         top="0"
// //         left="0"
// //         w="100%"
// //         h="100%"
// //         bg="rgba(0, 0, 0, 0.4)"
// //       />
// //       <Flex
// //         as={motion.div}
// //         variants={containerVariants}
// //         initial="hidden"
// //         animate="visible"
// //         direction="column"
// //         position={'absolute'}
// //         zIndex={1}
// //         top={0}
// //         align="center"
// //         justify="center"
// //         w={'100%'}
// //         h="100%"
// //         color="white"
// //         textAlign="center"
// //         px={4}
// //       >
// //         {/* The logo and other content that should be centered */}
// //         <Image src="/image/logoWhite.png" />
// //       </Flex>
// //       {/* This is where the children (SpinningText) will be rendered */}
// //       {children}
// //     </Box>
// //   );
// // };

// // export default ImageHeroSection;
