import React from 'react';
import { Box, Heading, Text, Flex, VStack, Image } from '@chakra-ui/react';

const AboutHero = () => {
  return (
    <Box>
      <Box
        maxW={'1679px'}
        margin={'auto'}
        p={{ base: '20px' }}
        py={{ base: '50px', md: '100px', '2xl': '203px' }}
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="start"
          justify="center"
        >
          <VStack align="start" spacing={2} mb={{ base: 6, md: 0 }}>
            <Heading
              as="h2"
              fontSize={{ base: '30px', md: '45px', xl: '60px', '2xl': '80px' }}
              color="#A8463F"
              fontWeight="200"
              whiteSpace="nowrap"
            >
              ABOUT{' '}
              <Text as="span" fontStyle="italic" fontFamily={'Times'}>
                US
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
            mt={{ '2xl': '160px' }}
          >
            At{' '}
            <Text as="span" fontWeight="400" fontFamily={'Times'}>
              NEO Legal
            </Text>
            , we believe the future of law is smarter, faster, and more
            transparent. Our team combines deep legal expertise with innovative
            technology to deliver solutions that keep pace with modern business.
            Whether protecting intellectual property, guiding a startup, or
            structuring a complex deal, we're committed to helping clients move
            forward with confidence.
          </Text>
        </Flex>
      </Box>
      {/* <Box>
        <Image src="/image/ourEXPERTISEheroImg.webp" />
      </Box> */}
    </Box>
  );
};

export default AboutHero;
