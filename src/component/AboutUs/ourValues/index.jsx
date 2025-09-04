import { Box, Flex, Heading, Text, Icon, Image } from '@chakra-ui/react';
import { CiCreditCard1 } from 'react-icons/ci';
// Example icon import
import { FaLaptopCode } from 'react-icons/fa';

// This is a basic example of a single value card component
const ValueCard = ({ icon, title, description }) => {
  return (
    <Box
      bg="#A8463F" // A deep reddish-brown color
      color="white"
      p={6}
      my={2}
      borderRadius="md"
      borderBottom="2px solid white"
    >
      <Icon as={icon} w={'46px'} h={'46px'} mb={2} color={'#FFF0DB'} />
      <Heading
        as="h3"
        fontSize={{ base: '20px', md: '24px', lg: '26px', xl: '34px' }}
        fontWeight={'200'}
        color={'#FFF0DB'}
      >
        {title}
      </Heading>
      <Text
        fontSize={{ base: '18px', md: '20px', '2px': '24px' }}
        fontStyle={'ExtraLight'}
        fontWeight={'200'}
        mt={'5px'}
        color={'#FFF0DB'}
      >
        {description}
      </Text>
    </Box>
  );
};

// This is the main component structure
const OurValuesSection = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      bg="#FFF0DB" // Light beige background color
    >
      {/* Left side: Image */}
      <Box
        // flex={{ base: '1', md: '0.5' }}
        // w="100%"
        // h={{ base: '400px', md: 'auto' }}
        overflow="hidden"
      >
        <Image
          src="/image/valueImg.png"
          alt="Two men discussing business"
          objectFit="cover"
          w="100%"
          h="100%"
          filter="sepia(0.6)"
        />
      </Box>

      {/* Right side: Values */}
      <Flex
        // flex={{ base: '1', md: '0.5' }}
        direction="column"
        py={'40px'}
        px={{ base: '20px', md: '40px', '2xl': '120px' }}
        width={{ base: '100%', '2xl': '45%' }}
      >
        <Text
          fontSize={{ base: '30px', md: '45px', xl: '60px', '2xl': '80px' }}
          fontWeight="200"
          color="#A8463F"
        >
          OUR{' '}
          <Text as={'span'} fontFamily={'Times'}>
            {' '}
            VALUE
          </Text>
        </Text>

        {/* Render each value card here */}
        <ValueCard
          icon={CiCreditCard1}
          title="Agile"
          description="Fast, flexible solutions for changing business needs."
        />
        <ValueCard
          icon={CiCreditCard1}
          title="Transparent"
          description="Clear pricing, clear process, no surprises."
        />
        <ValueCard
          icon={CiCreditCard1}
          title="Tech-Forward"
          description="Leveraging AI and modern tools to stay ahead."
        />
        <ValueCard
          icon={CiCreditCard1}
          title="Client-Centered"
          description="Built on trust, clarity, and long-term partnerships."
        />

        {/* Add the other two cards here */}
      </Flex>
    </Flex>
  );
};

export default OurValuesSection;
