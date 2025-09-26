import { Box, Flex, Text } from '@chakra-ui/react';

const MissionSection = () => {
  return (
    <Box
      bg={'#FFF0DB'}
      bgImage="url('/image/bgOverMission.webp')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box
        maxW={'1679px'}
        margin={'auto'}
        px={{ base: '20px' }}
        py={{ base: '50px', md: '80px', '2xl': '117px' }}
      >
        <Flex
          gap={{ base: '20px', md: '40px', xl: '60px', '2xl': '97px' }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Text
            fontSize={{ base: '30px', md: '45px', xl: '60px', '2xl': '80px' }}
            fontWeight="200"
            color="#A8463F"
            lineHeight={'normal'}
          >
            OUR{' '}
            <Text as={'span'} fontFamily={'Times'}>
              {' '}
              MISSION
            </Text>
          </Text>
          <Text
            fontSize={{
              base: '20px',
              sm: '24px',
              md: '28px',
              lg: '34px',
              '2xl': '40px',
            }}
            fontWeight={'200'}
            color="#A8463F"
            textAlign={'justify'}
          >
            <Text as="span" fontFamily={'Times'}>
              {' '}
              At NEO Legal,
            </Text>{' '}
            our mission is to adapt legal services to the needs of the modern
            era. We integrate{' '}
            <Text as="span" fontFamily={'Times'}>
              legal expertise
            </Text>{' '}
            with technology to{' '}
            <Text as="span" fontFamily={'Times'}>
              improve efficiency, clarity, and accessibility.
            </Text>
            Our work spans from supporting startups to assisting established
            enterprises with their legal requirements.
          </Text>
        </Flex>

        {/* The original image section is removed because it's now a background */}
      </Box>
    </Box>
  );
};

export default MissionSection;
