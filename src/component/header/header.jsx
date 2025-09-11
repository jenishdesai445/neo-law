import {
  Box,
  Flex,
  Text,
  Link,
  Spacer,
  useMediaQuery,
  Image,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';

const Header = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
            href="/our-expertise"
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
            href="/get-in-touch"
            fontSize={{ base: '18px', md: '18px', lg: '20px', '2xl': '24px' }}
            fontWeight={'200'}
            _hover={{ textDecoration: 'none', color: '#A8463F' }}
          >
            Contact
          </Link>
        </Flex>
      ) : (
        <>
          <IconButton
            ref={btnRef}
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="outline"
            fontSize="30px"
            bg="white"
            color="#b46464"
            _hover={{ bg: 'gray.100' }}
          />
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} align="stretch">
                  <Link
                    href="/"
                    fontSize="18px"
                    fontWeight="200"
                    onClick={onClose}
                    _hover={{ textDecoration: 'none', color: '#A8463F' }}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about-us"
                    fontSize="18px"
                    fontWeight="200"
                    onClick={onClose}
                    _hover={{ textDecoration: 'none', color: '#A8463F' }}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/our-expertise"
                    fontSize="18px"
                    fontWeight="200"
                    onClick={onClose}
                    _hover={{ textDecoration: 'none', color: '#A8463F' }}
                  >
                    Expertise
                  </Link>
                  <Link
                    href="#"
                    fontSize="18px"
                    fontWeight="200"
                    onClick={onClose}
                    _hover={{ textDecoration: 'none', color: '#A8463F' }}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/get-in-touch"
                    fontSize="18px"
                    fontWeight="200"
                    onClick={onClose}
                    _hover={{ textDecoration: 'none', color: '#A8463F' }}
                  >
                    Contact
                  </Link>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Flex>
  );
};

export default Header;
