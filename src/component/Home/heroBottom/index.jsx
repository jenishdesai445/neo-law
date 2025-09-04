// import { Box, Button, Flex, Icon, Image } from '@chakra-ui/react';
// import { FaChevronRight } from 'react-icons/fa';
// import NeoLawLogo from './path/to/your/neo-law-logo.png'; // Make sure to provide the correct path to your logo image

// const HeroSectionBottom = () => {
//   return (
//     <Flex
//       direction={{ base: 'column', md: 'row' }}
//       align="center"
//       justify="space-between"
//       p={{ base: 8, md: 16 }}
//       bg="white"
//       color="#A8463F"
//       minH="60vh"
//     >
//       <Box
//         textAlign={{ base: 'center', md: 'left' }}
//         maxW={{ md: '50%' }}
//         mb={{ base: 8, md: 0 }}
//       >
//         <Heading
//           as="h1"
//           size={{ base: 'xl', md: '2xl' }}
//           mb={4}
//           fontWeight="normal"
//           lineHeight="1.2"
//         >
//           Modern Legal Solutions for
//           <br />
//           <Text as="span" fontStyle="italic" color="#884c4c">
//             Tomorrow's Challenges
//           </Text>
//         </Heading>
//         <Button
//           variant="outline"
//           colorScheme="pink"
//           borderColor="#A8463F"
//           color="#A8463F"
//           size="lg"
//           rightIcon={<Icon as={FaChevronRight} />}
//           _hover={{ bg: '#fbf0ef' }}
//         >
//           Schedule a Consultation
//         </Button>
//       </Box>
//       {/* <Box flexShrink={0} display={{ base: 'none', md: 'block' }}>
//         <Image
//           src={NeoLawLogo}
//           alt="NEO LAW Logo"
//           boxSize={{ base: '150px', md: '200px', lg: '250px' }}
//           objectFit="contain"
//         />
//       </Box> */}
//     </Flex>
//   );
// };

// export default HeroSectionBottom;

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { Box, Flex, Button, Heading, Text, Icon } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';
import './style.css';
import { BsChevronRight } from 'react-icons/bs';
import NeoButton from '../../common/button';

gsap.registerPlugin(ScrollTrigger);

const HeroSectionBottom = React.forwardRef((props, ref) => {
  const textRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    // Check for the SplitType instance and revert if it exists
    const splitInstance = SplitType.revert(textRef.current);
    if (splitInstance) {
      splitInstance.revert();
    }

    const split = new SplitType(textRef.current, {
      types: 'lines, words, chars',
    });

    if (tl.current) {
      tl.current.kill();
    }

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current.parentElement,
        start: 'top top',
        end: '+=200%',
        pin: true,
        scrub: 0.1,
        markers: false,
      },
    });

    tl.current.to(split.chars, {
      color: '#A8463F',
      stagger: 0.1, // Adjusted stagger for a similar effect
      ease: 'power1.inOut',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (tl.current) {
        tl.current.kill();
      }
      split.revert();
    };
  }, []);

  return (
    <Box ref={ref} id="main" className="text-outer-wrapper">
      <Box className="txt-wrapper">
        <Text
          fontSize={{
            base: '20px',
            sm: '25px',
            md: '30px',
            lg: '35px',
            '2xl': '40px',
          }}
          mt={{ base: '50', md: '150px', lg: '180px', xl: '228px' }}
          ref={textRef}
          fontWeight={'200'}
          textAlign={{ base: 'center', lg: 'start' }}
        >
          Protecting innovation in a complex, ever-evolving world.{' '}
          <Text
            as={'span'}
            fontStyle={'italic'}
            fontWeight={'400'}
            fontFamily={'Times'}
          >
            At NEO
          </Text>
          , we combine deep legal expertise with cutting-edge technology to
          guide your business forward.
        </Text>
      </Box>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="end"
        bg="white"
        color="#A8463F"
      >
        <Box
          textAlign={{ base: 'center', lg: 'left' }}
          maxW={{ base: '100%', lg: '50%' }}
          mb={{ base: 8, md: 0 }}
          mt={{ base: '30px', md: '50px' }}
        >
          <Text
            fontSize={{ base: 'xl', md: '24px' }}
            mb={'30px'}
            fontWeight="200"
          >
            Protecting innovation in a complex, ever-evolving world. At NEO, we
            combine deep legal expertise with cutting-edge technology to guide
            your business forward.
          </Text>
          <Flex
            gap={{ base: '10px', md: '30px' }}
            flexWrap={'wrap'}
            alignItems={{ base: 'center', lg: 'start' }}
            justifyContent={{ base: 'center', lg: 'start' }}
          >
            {/* <Button
              variant="outline"
              borderColor="#b46464"
              color="#b46464"
              fontWeight={'200'}
              size="lg"
              borderRadius="0"
              rightIcon={
                <Icon
                  as={BsChevronRight}
                  sx={{
                    transition: 'transform 0.2s ease-in-out',
                    '.chakra-button:hover &': {
                      animation: 'slide-right 0.3s forwards',
                    },
                  }}
                />
              }
              _hover={{ bg: '#fbf0ef' }}
              px={8}
            >
              Schedule a Consultation
            </Button>
            <Button
              variant="outline"
              borderColor="#b46464"
              color="#b46464"
              size="lg"
              borderRadius="0"
              fontWeight={'200'}
              rightIcon={
                <Icon
                  as={BsChevronRight}
                  sx={{
                    transition: 'transform 0.2s ease-in-out',
                    '.chakra-button:hover &': {
                      animation: 'slide-right 0.3s forwards',
                    },
                  }}
                />
              }
              _hover={{ bg: '#fbf0ef' }}
              px={8}
            >
              View Our Expertise
            </Button> */}
            <NeoButton>Schedule a Consultation</NeoButton>

            <NeoButton>View Our Expertise</NeoButton>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
});

export default HeroSectionBottom;
