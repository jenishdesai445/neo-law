import React from 'react';
import { Box, Text, Image, Flex, Heading } from '@chakra-ui/react';

const CeoMessage = () => {
  return (
    <Box bg="#a84343">
      <Box
        maxW={'1680px'}
        margin={'auto'}
        display="flex"
        px={'20px'}
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="end"
        borderRadius="md"
        gap={'51px'}
      >
        <Box width={'60%'} py={{ base: '50px', '2xl': '99px' }}>
          <Heading
            as="h2"
            fontSize={{ base: '30px', md: '45px', xl: '60px', '2xl': '80px' }}
            color="#FFF0DB"
            fontWeight="200"
            whiteSpace="nowrap"
            mb={'30px'}
          >
            MESSAGE FROM{' '}
            <Text fontStyle="italic" fontFamily={'Times'}>
              OUR CEO
            </Text>
          </Heading>
          <Text
            fontSize={{
              base: '20px',
              sm: '24px',
              md: '28px',
              lg: '34px',
              '2xl': '40px',
            }}
            fontWeight={'200'}
            color="#FFF0DB"
            textAlign={'justify'}
          >
            Driven by a passion for{' '}
            <Text as="span" fontWeight="400" fontFamily={'Times'}>
              accessible, transparent, and client-focused
            </Text>{' '}
            legal services, [CEO Name] leads{' '}
            <Text as="span" fontWeight="400" fontFamily={'Times'}>
              Neo Law
            </Text>{' '}
            with a vision to blend{' '}
            <Text as="span" fontWeight="400" fontFamily={'Times'}>
              traditional expertise
            </Text>{' '}
            with{' '}
            <Text as="span" fontWeight="400" fontFamily={'Times'}>
              modern innovation
            </Text>
            . With years of experience in navigating{' '}
            <Text as="span" fontWeight="400" fontFamily={'Times'}>
              complex legal challenges
            </Text>
            , He has built a culture rooted in{' '}
            <Text as="span" fontWeight="400" fontFamily={'Times'}>
              trust, professionalism, and progressive solutions
            </Text>
            . Under [CEO Name]'s leadership, Neo Law is committed to{' '}
            <Text as="span" fontWeight="400" fontFamily={'Times'}>
              simplifying the legal journey
            </Text>{' '}
            for individuals and businesses alike, ensuring that justice is not
            only{' '}
            <Text as="span" fontWeight="400" fontFamily={'Times'}>
              served
            </Text>{' '}
            but also{' '}
            <Text as="span" fontWeight="400" fontFamily={'Times'}>
              experienced
            </Text>{' '}
            with{' '}
            <Text as="span" fontWeight="400" fontFamily={'Times'}>
              clarity, confidence, and care
            </Text>{' '}
            in today's fast-changing world.
          </Text>
        </Box>
        <Box flex="none" w={{ base: '80%', md: '35%' }} textAlign="center">
          {/* Placeholder for the CEO's image */}
          <Image
            src="/image/businessman-dress-code-posing.png"
            alt="CEO of Neo Law"
            objectFit="cover"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CeoMessage;
