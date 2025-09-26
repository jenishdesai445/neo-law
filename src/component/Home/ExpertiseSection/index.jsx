import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import {
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
  FaRocket,
  FaGlobe,
  FaChartLine,
  FaBalanceScale,
  FaUsers,
} from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Create a motion component for the cards
const MotionBox = motion(Box);

export default function ExpertiseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const scrollContainer = useRef(null);
  const expertiseItemsRef = useRef([]);

  const expertiseItems = [
    // Your array of expertise items
    {
      no: '01.',
      title: 'Technology Law',
      description:
        'Navigating regulations around software, platforms, and emerging technologies.',
      icon: '/image/icon/cardLogo.webp',
    },
    {
      no: '02.',
      title: 'Intellectual Property',
      description:
        'Safeguarding your innovations with trademarks, patents, and copyrights.',
      icon: '/image/icon/cardLogo.webp',
    },
    {
      no: '03.',
      title: 'Corporate & M&A',
      description:
        'Structuring smart deals, mitigating risks, and driving business growth.',
      icon: '/image/icon/cardLogo.webp',
    },
    {
      no: '04.',
      title: 'Data Privacy Compliance',
      description:
        'Helping you stay ahead of GDPR, CCPA, and evolving privacy laws.',
      icon: '/image/icon/cardLogo.webp',
    },
    {
      no: '05.',
      title: 'Startups & Venture Capital',
      description:
        'Legal frameworks that scale with your business—from seed to IPO.',
      icon: '/image/icon/cardLogo.webp',
    },
    {
      no: '06.',
      title: 'Dispute Resolution',
      description:
        'Clear, strategic representation to resolve conflicts efficiently.',
      icon: '/image/icon/cardLogo.webp',
    },
  ];

  useEffect(() => {
    const panels = expertiseItemsRef.current;
    const getXPercent = () => {
      if (window.innerWidth >= 1600) {
        return -100 * (panels.length - 3);
      }
      // Desktop/large screens (show 3 cards)
      if (window.innerWidth >= 1024) {
        return -100 * (panels.length - 2);
      }
      if (window.innerWidth >= 992) {
        return -100 * (panels.length - 1.5);
      }
      // Tablet/medium screens (show 2 cards)
      if (window.innerWidth >= 768) {
        return -100 * (panels.length - 1.5);
      }
      // Mobile/small screens (show 1 card)
      return -100 * (panels.length - 0.5);
    };

    // Set up the horizontal scroll animation
    let scrollTween = gsap.to(panels, {
      xPercent: getXPercent(),
      ease: 'none',
      scrollTrigger: {
        trigger: scrollContainer.current,
        pin: true,
        scrub: 0.1,
        start: '300px',
        end: '+=100%',
      },
    });

    return () => {
      // Clean up the GSAP animation on component unmount
      scrollTween.kill();
    };
  }, []);

  return (
    <Box position={'relative'}>
      <Box
        py={{ base: '60px', md: '100px' }}
        px={{ base: '20px', md: '40px', lg: '120px' }}
        bg="#FFF0DB"
        mr={{ lg: '60px' }}
        position={'relative'}
        maxW={{ base: '100%', lg: 'calc(100% - 65px)' }}
        ref={scrollContainer}
        height={{ base: '110vh', xl: '130vh' }}
      >
        <VStack align={{ base: 'center', lg: 'flex-start' }} mb="60px">
          <Heading
            as="h2"
            fontSize={{ base: '40px', md: '45px', xl: '60px', '2xl': '80px' }}
            fontWeight="200"
            color="#A8463F"
            mb="20px"
          >
            Our{' '}
            <Text
              as={'span'}
              fontStyle={'italic'}
              fontFamily={'Times'}
              fontWeight={'400'}
            >
              {' '}
              Expertise{' '}
            </Text>
          </Heading>

          <Text
            fontSize={{ base: '20px', md: '30px', '2xl': '40px' }}
            color="#A8463F"
            maxW="1024px"
            fontWeight={'200'}
            lineHeight="tall"
            textAlign={{ base: 'center', lg: 'start' }}
          >
            We provide smart, future-ready{' '}
            <Text
              as="span"
              fontWeight="400"
              fontFamily={'Times'}
              fontStyle={'italic'}
            >
              legal solutions
            </Text>{' '}
            for startups, tech companies, and growing businesses. From{' '}
            <Text
              as="span"
              fontWeight="400"
              fontFamily={'Times'}
              fontStyle={'italic'}
            >
              IP protection
            </Text>{' '}
            to M&A and regulatory compliance, our team combines deep{' '}
            <Text
              as="span"
              fontWeight="400"
              fontFamily={'Times'}
              fontStyle={'italic'}
            >
              legal insight
            </Text>{' '}
            with a modern, tech-driven approach.
          </Text>
        </VStack>

        <Box
          maxW={{ base: '100%', md: '90%' }}
          mx="auto"
          position={{ base: 'relative', md: 'absolute' }}
          right={{ lg: '-60px' }}
          ref={scrollContainer}
          overflow="hidden"
        >
          <Flex
            direction={{ base: 'row', md: 'row' }}
            flexWrap="nowrap"
            justify="space-between"
            bg="#A8463F"
            py={'25px'}
            px={{ base: '20px', lg: '60px' }}
            overflow={'hidden'}
            className="scrollbar" // Note: This class is for styling the scrollbar on non-GSAP-controlled elements.
          >
            {expertiseItems.map((item, index) => (
              <Box
                ref={el => (expertiseItemsRef.current[index] = el)}
                key={index}
                color="white"
                width={{
                  base: '100%',
                  md: 'calc(50% - 10px)',
                  lg: '519px',
                }}
                minWidth={{
                  base: '100%',
                  md: 'calc(50% - 10px)',
                  lg: '519px',
                }}
                // You can keep the Framer Motion stuff if you want, but GSAP now controls the position.
                // custom={index}
                // variants={cardVariants}
                // initial="hidden"
                // animate={isVisible ? 'visible' : 'hidden'}
              >
                {/* The rest of your component's JSX */}
                <Text
                  fontSize={{ base: '30px', md: '40px', '2xl': '60px' }}
                  fontWeight={'200'}
                  mb="10px"
                >
                  {item.no}
                </Text>
                <Flex borderTop={'1px solid white'} pt="45px" mb="15px">
                  <Flex
                    flexDirection={'column'}
                    gap={'16px'}
                    borderRight={'1px solid white'}
                    pl={{
                      base: item.no === '01.' ? '0px' : '30px',
                      lg: item.no === '01.' ? '0px' : '60px',
                    }}
                    pr={{ base: '30px', lg: '60px' }}
                  >
                    <Box mr="10px">
                      <Image
                        src={item.icon}
                        alt="icon"
                        width={{ base: '50px', xl: 'auto' }}
                      />
                    </Box>
                    <Heading
                      as="h3"
                      fontSize={{ base: '20px', md: '24px', '2xl': '34px' }}
                      fontWeight="200"
                      fontFamily={'Lexend'}
                    >
                      {item.title}
                    </Heading>
                    <Text
                      fontSize={{ base: '18px', md: '20px', '2px': '24px' }}
                      fontStyle={'ExtraLight'}
                      fontWeight={'200'}
                    >
                      {item.description}
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
