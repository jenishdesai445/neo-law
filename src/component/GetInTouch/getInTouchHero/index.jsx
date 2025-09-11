import React from 'react';
import { Box, Heading, Text, Flex, VStack, Image } from '@chakra-ui/react';

const GetInTouchHero = () => {
  return (
    <Box>
      <Box
        maxW={'1679px'}
        margin={'auto'}
        p={{ base: '20px' }}
        py={{ base: '50px', md: '100px', '2xl': '203px' }}
      >
        <Flex
          direction={{ base: 'column', md: 'column' }}
          align="start"
          justify="center"
          gap={{ base: 6, md: 10, '2xl': '75px' }}
        >
          <VStack align="start" spacing={2} mb={{ base: 6, md: 0 }}>
            <Heading
              as="h2"
              fontSize={{ base: '40px', md: '45px', xl: '60px', '2xl': '80px' }}
              color="#A8463F"
              fontWeight="200"
              whiteSpace="nowrap"
            >
              GET IN{' '}
              <Text as="span" fontStyle="italic" fontFamily={'Times'}>
                TOUCH
              </Text>
            </Heading>
          </VStack>
          <Text
            fontSize={{
              base: '20px',
              sm: '24px',
              md: '28px',
              lg: '34px',
              '2xl': '40px',
            }}
            color="#A8463F"
            fontWeight={'200'}
            width={'80%'}
            marginLeft={'auto'}
          >
            Our professional team is readily available to address your needs and
            provide timely and informed responses. You can reach us through the
            contact form below.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default GetInTouchHero;
