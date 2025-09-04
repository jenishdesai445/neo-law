import {
  Box,
  Flex,
  Text,
  Link,
  Spacer,
  useMediaQuery,
  Image,
} from '@chakra-ui/react';

const Header = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      px={{ base: '20px', '2xl': '80px' }}
      py={{ base: '20px', '2xl': '56px' }}
      bg="white"
      color="#b46464"
    >
      <Box>
        <Image src="/image/logo.png" width={{ base: '150px', md: 'auto' }} />
      </Box>

      <Spacer />

      {isLargerThan768 ? (
        <Flex gap={{ base: '20px', md: '20px', lg: '35px', '2xl': '46px' }}>
          <Link
            href="/"
            fontSize={{ base: '18px', md: '18px', lg: '20px', '2xl': '24px' }}
            fontWeight={'200'}
            _hover={{ textDecoration: 'none', color: '#A8463F' }}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            fontSize={{ base: '18px', md: '18px', lg: '20px', '2xl': '24px' }}
            fontWeight={'200'}
            _hover={{ textDecoration: 'none', color: '#A8463F' }}
          >
            About Us
          </Link>
          <Link
            href="#"
            fontSize={{ base: '18px', md: '18px', lg: '20px', '2xl': '24px' }}
            fontWeight={'200'}
            _hover={{ textDecoration: 'none', color: '#A8463F' }}
          >
            Expertise
          </Link>
          <Link
            href="#"
            fontSize={{ base: '18px', md: '18px', lg: '20px', '2xl': '24px' }}
            fontWeight={'200'}
            _hover={{ textDecoration: 'none', color: '#A8463F' }}
          >
            Blog
          </Link>
          <Link
            href="#"
            fontSize={{ base: '18px', md: '18px', lg: '20px', '2xl': '24px' }}
            fontWeight={'200'}
            _hover={{ textDecoration: 'none', color: '#A8463F' }}
          >
            Contact
          </Link>
        </Flex>
      ) : (
        <Box>
          <Text fontSize="md">Menu</Text>
        </Box>
      )}
    </Flex>
  );
};

export default Header;
