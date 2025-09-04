import React, { useState, useEffect } from 'react';
import './ScrollingText.css'; // Assuming you save the CSS in a separate file
import { Text } from '@chakra-ui/react';

const ScrollingText = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (this is an example, you might need to adjust based on your page layout)
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = currentScroll / maxScroll;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check for scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className="scrolling-text-2 -single -observed"
      style={{ '--scroll-progress': scrollProgress }}
    >
      <div className="scrolling-text-2-wrap">
        <h2 className="scrolling-text-2-inner">
          <span className="scrolling-text-2-fragment">
            <Text
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
            >
              From{' '}
              <Text
                as={'span'}
                fontFamily={'Times'}
                fontStyle={'italic'}
                fontWeight={'400'}
              >
                Agreement
              </Text>{' '}
              to Achievement
            </Text>
          </span>
        </h2>
      </div>
    </section>
  );
};

export default ScrollingText;
