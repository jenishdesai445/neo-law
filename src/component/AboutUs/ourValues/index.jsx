import { Box, Flex, Heading, Text, Icon, Image } from '@chakra-ui/react';
import { CiCreditCard1 } from 'react-icons/ci';
import { useState } from 'react';

const ValueCard = ({
  icon,
  title,
  description,
  isHighlighted,
  defaultIconSrc,
  hoverIconSrc,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const currentBg = isHovered || isHighlighted ? '#A8463F' : 'transparent';
  const currentColor = isHovered || isHighlighted ? 'white' : '#A8463F';
  const currentBorder =
    isHovered || isHighlighted ? '2px solid transparent' : '2px solid #A8463F';

  const iconBoxBg = isHovered || isHighlighted ? '#FFF0DB' : '#A8463F';
  const iconColor = isHovered || isHighlighted ? '#A8463F' : '#FFF0DB'; // This color is for actual Chakra Icons, not for Image src

  const iconToDisplay = isHovered ? hoverIconSrc : defaultIconSrc;

  return (
    <Box
      bg={currentBg}
      color={currentColor}
      p={'24px'}
      borderRadius="30px"
      border={currentBorder}
      textAlign="center"
      width={{ base: '100%', md: '30%' }}
      transition="all 0.3s ease-in-out" // Smooth transition for hover effects
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      _hover={{
        cursor: 'pointer',
      }}
    >
      <Flex justify="center" mb={4}>
        <Box
          bg={iconBoxBg}
          borderRadius="full"
          p={4}
          transition="all 0.3s ease-in-out" // Smooth transition for icon box bg
        >
          <Image
            src={iconToDisplay}
            w={'46px'}
            h={'46px'}
            // If using an Image component, the 'color' prop won't directly change the image's color.
            // You might need a different approach (e.g., SVG manipulation or separate images for different colors)
            // For now, we'll keep the color prop as a placeholder if you decide to switch to actual Icon components.
            color={iconColor}
          />
        </Box>
      </Flex>
      <Heading
        as="h3"
        fontSize={{
          base: '20px',
          sm: '24px',
          md: '28px',
          lg: '34px',
          '2xl': '40px',
        }}
        fontWeight={'200'}
        fontFamily={'Times'}
        color={currentColor}
        mt={'20px'}
        mb={'10px'}
        transition="color 0.3s ease-in-out" // Smooth transition for text color
      >
        {title}
      </Heading>
      <Text
        fontSize={{ base: '20px', md: '24px', lg: '26px', '2xl': '34px' }}
        fontWeight={'200'}
        color={currentColor}
        transition="color 0.3s ease-in-out" // Smooth transition for text color
      >
        {description}
      </Text>
    </Box>
  );
};

const OurValuesSection = ({ title1, title2 }) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      maxW={'1680px'}
      margin={'auto'}
      px={'20px'}
      pb={{ base: '50px', md: '60px', '2xl': '117px' }}
    >
      <Heading
        as="h2"
        fontSize={{ base: '40px', md: '50px', lg: '60px' }}
        fontWeight="200"
        color="#A8463F"
        mb={10}
        textAlign="center"
      >
        {title1}{' '}
        <Text as={'span'} fontFamily={'Times'} fontWeight="bold">
          {title2}
        </Text>
      </Heading>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="stretch"
        wrap="wrap"
        width="100%"
        gap={'55px'}
      >
        <ValueCard
          title="DISCOVER"
          description="We listen to your needs and challenges."
          isHighlighted={false}
          defaultIconSrc="/image/icon/Research2.webp"
          hoverIconSrc="/image/icon/Research.webp"
        />
        <ValueCard
          title="DISCOVER"
          description="We listen to your needs and challenges."
          isHighlighted={false}
          defaultIconSrc="/image/icon/Research2.webp" // Highlighted state uses the hover icon as default
          hoverIconSrc="/image/icon/Research.webp" // On hover, it goes back to the unhighlighted icon
        />
        <ValueCard
          title="DISCOVER"
          description="We listen to your needs and challenges."
          isHighlighted={false}
          defaultIconSrc="/image/icon/Research2.webp"
          hoverIconSrc="/image/icon/Research.webp"
        />
      </Flex>
    </Flex>
  );
};

export default OurValuesSection;
