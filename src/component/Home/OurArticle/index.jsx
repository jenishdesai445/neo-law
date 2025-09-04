import React from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Icon,
  Button,
  Grid,
  Image,
} from '@chakra-ui/react';
import { FaArrowRight, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { BsChevronRight } from 'react-icons/bs';
import NeoButton from '../../common/button';

// A new component for each article row
const ArticleItem = ({ title, description }) => (
  <Grid
    as="a"
    href="#" // You can replace this with a real link
    templateColumns={{ base: '1fr', md: '1.5fr 2.5fr auto' }} // Defines grid columns: title (small), description (large), icon (small)
    justifyContent="space-between"
    alignItems="center"
    py={{ base: '20px', md: '30px', '2xl': '50px' }}
    px={{ base: '20px', '2xl': '120px' }}
    borderTop="1.5px solid #A8463F"
    _last={{ borderBottom: '1.5px solid #A8463F' }}
    _hover={{ textDecoration: 'none' }}
    cursor="pointer"
    gap={{ base: '20px', '2xl': '50px' }} // Add gap between grid items
  >
    <Heading
      as="h3"
      fontFamily={'Times'}
      fontSize={{ base: '20px', md: '24px', lg: '30px', '2xl': '40px' }}
      fontWeight="400"
      color="#A8463F"
      mb={2}
    >
      {title}
    </Heading>
    <Text
      fontSize={{ base: '16px', md: '18px', lg: '20px', '2xl': '24px' }}
      fontWeight="200"
      color="#A8463F"
      maxW="100%" // maxW is no longer needed here since grid handles the sizing
    >
      {description}
    </Text>
    <Box
      as={motion.div} // Use motion.div for animation
      whileHover={{ y: -10, x: 10 }} // Move up by 10px and right by 10px on hover
      transition={{ duration: 0.2 }} // Animation duration
      display={{ base: 'none', md: 'block' }} // Hide on mobile for cleaner look
    >
      <Image
        src={'/image/icon/ArrowTop.png'}
        color="#A8463F"
        width={{ base: '30px', '2xl': '59px' }}
      />
    </Box>
  </Grid>
);

const OurArticle = () => {
  const articles = [
    {
      title: 'FLAT-FEE LEGAL: WHY TRANSPARENCY WINS',
      description:
        'The era of unpredictable legal bills is over. Learn why flat-fee pricing gives startups clarity, saves money, and builds stronger client-lawyer trust.',
    },
    {
      title: 'AI AND COPYRIGHT: WHO OWNS THE OUTPUT?',
      description:
        'As AI tools create music, art, and code, the law struggles to keep up. We break down what copyright currently covers—and where the future may be headed.',
    },
    {
      title: 'IS YOUR STARTUP VC-READY?',
      description:
        'Before pitching investors, ensure your legal foundations are solid. From incorporation to IP protection, here’s what every founder needs in place to win investor confidence.',
    },
  ];

  return (
    <Box mx="auto" my={{ base: '50px', md: '80px', xl: '100px' }}>
      <Heading
        as="h2"
        fontSize={{ base: '30px', md: '60px', '2xl': '80px' }}
        fontWeight="200"
        color="#A8463F"
        mb="20px"
        textAlign={'center'}
      >
        OUR{' '}
        <Text
          as={'span'}
          fontStyle={'italic'}
          fontFamily={'Times'}
          fontWeight={'400'}
        >
          {' '}
          ARTICLE{' '}
        </Text>
      </Heading>
      <Box mt={{ base: '30px', md: '50px' }}>
        {articles.map((article, index) => (
          <ArticleItem
            key={index}
            title={article.title}
            description={article.description}
          />
        ))}
        <Flex justifyContent="center" mt={{ base: '30px', md: '50px' }}>
          <NeoButton>View Our Blog</NeoButton>
        </Flex>
      </Box>
    </Box>
  );
};

export default OurArticle;
