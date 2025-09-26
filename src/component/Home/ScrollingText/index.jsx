import React, { useEffect, useRef } from 'react';
import { Text } from '@chakra-ui/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    gsap.fromTo(
      textElement,
      {
        xPercent: 100, // Start off the right side of the screen
      },
      {
        xPercent: -100, // Move to the left off the screen
        ease: 'none',
        scrollTrigger: {
          trigger: textElement,
          scrub: 1, // Tie the animation to the scroll
          start: 'top bottom', // Start when the top of the text enters the bottom of the viewport
          end: 'bottom top', // End when the bottom of the text leaves the top of the viewport
        },
      }
    );
  }, []);

  return (
    <div style={{ overflow: 'hidden' }}>
      <Text
        ref={textRef}
        as="p"
        textTransform="uppercase"
        fontStyle={'normal'}
        fontWeight={'200'}
        color={'#A8463F'}
        fontSize={{
          base: '40px',
          md: '60px',
          lg: '80px',
          '2xl': '130px',
        }}
        style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
      >
        From{' '}
        <Text
          as={'span'}
          fontFamily={'Times'}
          fontStyle={'italic'}
          fontWeight={'400'}
        >
          Agreements{' '}
        </Text>{' '}
        to Achievement
      </Text>
    </div>
  );
};

export default ScrollingText;
