import React, { useState, useEffect, useRef } from 'react';
import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

// Framer Motion components
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const ImageHeroSection = () => {
  // Use a ref to get a direct reference to the image container
  const imageContainerRef = useRef(null); // Set the initial stateā

  const [isShrunk, setIsShrunk] = useState(false); // Use useEffect to add and clean up the scroll event listener

  useEffect(() => {
    // Define the scroll handler function
    const handleScroll = () => {
      // Check if the user has scrolled down a certain amount (e.g., 20px)
      const scrolledPast = window.scrollY > 20; // Update the state only if it needs toā change

      if (scrolledPast && !isShrunk) {
        setIsShrunk(true);
      } else if (!scrolledPast && isShrunk) {
        setIsShrunk(false);
      }
    }; // Add the event listener when the component mounts

    window.addEventListener('scroll', handleScroll); // Clean up the event listener when the component unmounts

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isShrunk]); // Re-run the effect if isShrunk changes // Use another useEffect to trigger the GSAP animation when isShrunk changes

  useEffect(() => {
    if (imageContainerRef.current) {
      gsap.to(imageContainerRef.current, {
        height: isShrunk ? '' : '100vh', // Animate to 600px or back to 100vh
        duration: 0.8, // Set the animation duration
        ease: 'power2.inOut', // Use a smooth easing function
      });
    }
  }, [isShrunk]); // Trigger this effect when isShrunk changes

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Box position="relative" overflow="hidden" ref={imageContainerRef}>
      <Box ref={imageContainerRef} height={'inherit'}>
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
        variants={containerVariants}
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
