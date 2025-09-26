import {
  Box,
  Flex,
  Text,
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
import { NavLink } from 'react-router-dom'; // ✅ import NavLink

const Header = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // ✅ Common Nav items
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Expertise', path: '/our-expertise' },
    { label: 'Blog', path: '/blog' }, // example route
    { label: 'Contact', path: '/get-in-touch' },
  ];

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
        <Image src="/image/logo.webp" width={{ base: '150px', md: 'auto' }} />
      </Box>

      <Spacer />

      {isLargerThan768 ? (
        <Flex gap={{ base: '20px', md: '20px', lg: '35px', '2xl': '46px' }}>
          {navItems.map(item => (
            <Text
              key={item.path}
              as={NavLink}
              to={item.path}
              fontSize={{ base: '18px', md: '18px', lg: '20px', '2xl': '24px' }}
              fontWeight="200"
              _hover={{ textDecoration: 'none', color: '#A8463F' }}
              style={({ isActive }) => ({
                color: isActive ? '#A8463F' : '#b46464', // active link highlight
                fontWeight: isActive ? '500' : '200',
              })}
            >
              {item.label}
            </Text>
          ))}
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
                  {navItems.map(item => (
                    <Text
                      key={item.path}
                      as={NavLink}
                      to={item.path}
                      fontSize="18px"
                      fontWeight="200"
                      onClick={onClose} // close drawer on click
                      _hover={{ textDecoration: 'none', color: '#A8463F' }}
                      style={({ isActive }) => ({
                        color: isActive ? '#A8463F' : '#b46464',
                        fontWeight: isActive ? '500' : '200',
                      })}
                    >
                      {item.label}
                    </Text>
                  ))}
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
