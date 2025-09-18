import React from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Icon,
  Image,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NeoButton from '../../common/button';

const OurOffice = () => {
  return (
    <Box
      bg="white"
      maxW={'1680px'}
      margin={'auto'}
      display="flex"
      flexDirection={{ base: 'column', lg: 'row' }}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
        h={'-webkit-fill-available'}
        flex={1}
        width={{ base: '100%', md: 'auto' }}
        textAlign={{ base: 'left', lg: 'left' }}
        py={{ base: '50px', md: '70px', lg: '80px', '2xl': '122px' }}
        px={{ base: '20px' }}
      >
        <Box>
          <Heading
            as="h2"
            fontSize={{
              base: '20px',
              sm: '24px',
              md: '28px',
              xl: '34px',
              '2xl': '40px',
            }}
            fontWeight={'200'}
            color="#A8463F"
            whiteSpace="nowrap"
            mb={'20px'}
          >
            Our{' '}
            <Text as="span" fontStyle="italic" fontFamily={'Times'}>
              Office
            </Text>
          </Heading>
          <Text
            fontSize={{ base: '22px', md: '30px', xl: '34px' }}
            color="#A8463F"
            fontWeight={'200'}
            display={{ base: 'none', md: 'block' }}
          >
            123 ABC State,
          </Text>
          <Text
            fontSize={{ base: '22px', md: '30px', xl: '34px' }}
            color="#A8463F"
            fontWeight={'200'}
            display={{ base: 'none', md: 'block' }}
          >
            ABC City,
          </Text>
          <Text
            fontSize={{ base: '22px', md: '30px', xl: '34px' }}
            color="#A8463F"
            fontWeight={'200'}
            display={{ base: 'none', md: 'block' }}
          >
            State
          </Text>
          <Text
            fontSize={{ base: '22px', md: '30px', xl: '34px' }}
            color="#A8463F"
            fontWeight={'200'}
            display={{ base: 'unset', md: 'none' }}
          >
            123 ABC State, ABC City, State
          </Text>
        </Box>
        <Box mt={'20px'}>
          <NeoButton>Direction</NeoButton>
        </Box>
      </Box>

      {/* Replaced the Image component with an iframe for a map */}
      <Box flex="2" height={'80vh'} w="100%">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.909995572877!2d-0.1277583842302371!3d51.50735097963567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7e0b5d9%3A0x7e8f5d0f6e9f1a2!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1678901234567!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

export default OurOffice;
