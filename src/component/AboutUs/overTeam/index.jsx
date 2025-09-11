import React from 'react';
import { Box, Flex, Heading, Text, Image, SimpleGrid } from '@chakra-ui/react';

const teamMembers = [
  {
    name: 'Suja Chandrasekaran',
    title: 'Founder of the T200 Foundation',
    imageUrl: '/image/userImage.png', // Replace with your image URLs
  },
  {
    name: 'Suja Chandrasekaran',
    title: 'Founder of the T200 Foundation',
    imageUrl: '/image/userImage.png',
  },
  {
    name: 'Suja Chandrasekaran',
    title: 'Founder of the T200 Foundation',
    imageUrl: '/image/userImage.png',
  },
];

const OurTeam = () => {
  return (
    <Box
      textAlign="center"
      maxW={'1680px'}
      margin={'auto'}
      px={'20px'}
      pt={{ base: '50px' }}
      pb={{ base: '50px', md: '60px', '2xl': '100px' }}
    >
      <Text
        fontSize={{ base: '30px', md: '45px', xl: '60px', '2xl': '80px' }}
        fontWeight="200"
        color="#A8463F"
        mb={{ base: '30px', md: '40px', '2xl': '50px' }}
      >
        OUR{' '}
        <Text as={'span'} fontFamily={'Times'}>
          {' '}
          TEAM
        </Text>
      </Text>

      <SimpleGrid
        columns={{ base: 1, md: 2, '2xl': 3 }}
        spacing={{ base: 2, xl: 10 }}
      >
        {teamMembers.map((member, index) => (
          <Box
            key={index}
            position="relative"
            overflow="hidden"
            borderRadius="lg"
            _hover={{
              '& .team-image': {
                filter: 'grayscale(0%)',
                transform: 'scale(1.05)',
              },
              '& .image-overlay': {
                opacity: 1,
              },
            }}
          >
            <Flex justify="center" align="center" mb={4}>
              <Box
                borderTopRadius="550px"
                overflow="hidden"
                position="relative"
                bg="#FFF0DB" // Light beige background as in your image
                px={{ base: '30px', md: '40px', lg: '60px', '2xl': '79px' }}
                pt={{ base: '20px', md: '30px', lg: '40px', '2xl': '51px' }}
              >
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  className="team-image"
                  filter="grayscale(100%)" // Start with grayscale
                  transition="all 0.3s ease-in-out"
                />
                {/* This overlay can be customized for hover color effects if needed
                    For a simple color reveal, the grayscale filter on the image itself works well.
                    If you want a *specific color* overlay on hover, uncomment and adjust this:
                */}
                {/* <Box
                  className="image-overlay"
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  bg="rgba(163, 77, 58, 0.4)" // Example: reddish overlay on hover
                  opacity="0"
                  transition="opacity 0.3s ease-in-out"
                /> */}
              </Box>
            </Flex>
            <Text
              fontSize={{ base: '30px', md: '40px', '2xl': '50px' }}
              fontWeight="400"
              fontFamily={'Times'}
              color="#A34D3A"
              mb={1}
            >
              {member.name}
            </Text>
            <Text
              fontSize={{ base: '20px', md: '24px', lg: '26px', xl: '30px' }}
              maxW={'280px'}
              m={'auto'}
              fontWeight={'200'}
              color="#A34D3A"
            >
              {member.title}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default OurTeam;
