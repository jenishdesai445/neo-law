import { Box } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function SpinningText() {
  // A ref to the spinning text container
  const textRef = useRef(null);
  const spinningContainerRef = useRef(null);
  const textToDisplay = ' LEGAL AND CORPORATE ★ CONSULTING ★';

  // This useEffect handles the dynamic rendering of the text characters
  useEffect(() => {
    if (textRef.current) {
      const textElement = textRef.current;
      const characters = textToDisplay.split('');
      const totalChars = characters.length;
      const angleIncrement = 360 / totalChars;

      const fontSize = {
        base: '8px',
        sm: '10px',
        md: '16px',
      };

      textElement.innerHTML = characters
        .map(
          (char, i) =>
            `<span style="
              position: absolute;
              left: 50%;
              transform-origin: 0 calc(var(--circle-size) / 2);
              font-size: var(--font-size);
              letter-spacing: normal;
              padding-top: 5px;
              transform: rotate(${i * angleIncrement}deg);
            ">${char}</span>`
        )
        .join('');

      const setFontSize = () => {
        if (window.innerWidth < 350) {
          textRef.current.style.setProperty('--font-size', fontSize.base);
        } else if (window.innerWidth < 500) {
          textRef.current.style.setProperty('--font-size', fontSize.sm);
        } else {
          textRef.current.style.setProperty('--font-size', fontSize.md);
        }
      };

      setFontSize();
      window.addEventListener('resize', setFontSize);
      return () => window.removeEventListener('resize', setFontSize);
    }
  }, [textToDisplay]);

  // The GSAP animation with ScrollTrigger
  useGSAP(
    () => {
      gsap.to(textRef.current, {
        rotation: 360, // Rotate the element 360 degrees
        ease: 'none', // Linear ease for constant speed
        scrollTrigger: {
          trigger: spinningContainerRef.current,
          start: 'top bottom', // Start the animation when the top of the trigger hits the bottom of the viewport
          end: 'bottom top', // End the animation when the bottom of the trigger leaves the top of the viewport
          scrub: 1, // Smooth scrubbing. The animation "catches up" to the scroll position
        },
      });
    },
    { scope: spinningContainerRef }
  ); // Use the scope for safe cleanup

  return (
    <Box width="fit-content">
      <Box
        display="flex"
        width="fit-content"
        rounded="100%"
        justifyContent="center"
        alignItems="center"
        fontFamily="'Raleway', sans-serif"
        bg="#FFF0DB"
        p="10px"
      >
        <Box
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="full"
          width={{ base: '100px', sm: '150px', md: '180px' }}
          height={{ base: '100px', sm: '150px', md: '180px' }}
          ref={spinningContainerRef} // Ref for the trigger element
          sx={{
            '--circle-size': '180px',
            '@media (max-width: 768px)': {
              '--circle-size': '150px',
            },
            '@media (max-width: 480px)': {
              '--circle-size': '100px',
            },
          }}
        >
          <Box
            position="absolute"
            bg="#FFF0DB"
            borderRadius="full"
            width={{ base: '70px', sm: '100px', md: '120px' }}
            height={{ base: '70px', sm: '100px', md: '120px' }}
            backgroundImage="url('/image/icon/SpinningLogo.webp')"
            backgroundSize={{ base: 'contain', md: 'inherit' }}
            backgroundPosition="center"
            bgRepeat="no-repeat"
            zIndex={1}
            border="1px solid #A8463F"
          />
          <Box
            bg="#FFF0DB"
            rounded="100%"
            border="1px solid #A8463F"
            color="#A8463F"
            position="absolute"
            width="100%"
            height="100%"
            ref={textRef}
            // GSAP handles the transform style, so no need for an inline style here
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}
