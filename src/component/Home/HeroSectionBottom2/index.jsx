import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  Image,
} from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';
import { BsChevronRight } from 'react-icons/bs';
import NeoButton from '../../common/button';

const HeroSectionBottom2 = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify={{ base: 'center', md: 'flex-start' }} // Align text to start for larger screens
      maxW={'1680px'}
      px={'20px'}
      m={'auto'}
      color="#b46464"
      position="relative" // Needed for absolute positioning of the logo
      overflow="hidden" // Ensure nothing spills out
      mt={'49px'}
      textTransform={'uppercase'}
    >
      <Box
        textAlign={{ base: 'center', md: 'left' }}
        mb={{ base: 8, md: 0 }}
        // ml={{ md: 10, lg: 20 }} // Add left margin for content
      >
        <Heading
          as="h1"
          fontSize={{ base: '30px', md: '40px', lg: '60px', '2xl': '80px' }} // Adjust font sizes
          mb={'37px'}
          fontWeight="200"
          lineHeight="1.2"
          color="#b46464" // Main heading color
        >
          Modern Legal Solutions for
          <br />
          <Text
            as="span"
            fontFamily={'Times'}
            fontStyle="italic"
            color="#A8463F"
            fontWeight={'700'}
          >
            Tomorrow's Challenges
          </Text>
        </Heading>

        {/* <NeoButton> Schedule a Consultation</NeoButton> */}
      </Box>
    </Flex>
  );
};

export default HeroSectionBottom2;
