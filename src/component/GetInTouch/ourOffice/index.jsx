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
      py={{ base: '50px', md: '70px', lg: '80px', '2xl': '122px' }}
      px={{ base: '20px' }}
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

      <Box flex="2" mt={{ base: 4, lg: 0 }} ml={{ lg: 8 }}>
        <Image
          src="/image/ourOfficeImg.png"
          alt="Eiffel Tower"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default OurOffice;
