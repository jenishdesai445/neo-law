import React from 'react';
import {
  Box,
  SimpleGrid,
  Text,
  Link,
  Input,
  Textarea,
  Button,
  Stack,
  FormControl,
  FormLabel,
  useBreakpointValue,
  Image,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';
import { BsChevronRight } from 'react-icons/bs';

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      bg="#A53F3F"
      color="white"
      pt={{ base: '0px', xl: '63px' }}
      position="relative"
      overflow="hidden"
    >
      <Flex
        // columns={{ base: 1, sm: 2, md: 4 }}
        justifyContent={'space-between'}
        spacing={{ base: 8, md: 10 }}
        maxW="1660px"
        p={'20px'}
        mx="auto"
        zIndex="1"
        position="relative" // Ensure content is above the watermark
        flexWrap={'wrap'}
      >
        {/* Menu Section */}
        <Box borderTop={'1px solid white'} mt={{ base: '20px', md: '0' }}>
          <Text
            fontSize={{ base: '24px', md: '30px', lg: '35px', xl: '40px' }}
            mt={'36px'}
            fontWeight="700"
            mb={'20px'}
            fontFamily={'Times'}
          >
            Menu
          </Text>
          <Stack spacing={'13px'} borderColor="#FFFFFF" fontWeight={'200'}>
            <Link href="#" _hover={{ textDecoration: 'underline' }}>
              Home
            </Link>
            <Link href="#" _hover={{ textDecoration: 'underline' }}>
              About Us
            </Link>
            <Link href="#" _hover={{ textDecoration: 'underline' }}>
              Expertise
            </Link>
            <Link href="#" _hover={{ textDecoration: 'underline' }}>
              Blog
            </Link>
            <Link href="#" _hover={{ textDecoration: 'underline' }}>
              Contact
            </Link>
          </Stack>
        </Box>

        {/* Expertise Section */}
        <Box borderTop={'1px solid white'} mt={{ base: '20px', md: '0' }}>
          <Text
            fontSize={{ base: '24px', md: '30px', lg: '35px', xl: '40px' }}
            mt={'36px'}
            fontWeight="700"
            mb={'20px'}
            fontFamily={'Times'}
          >
            Expertise
          </Text>
          <Stack spacing={'13px'} borderColor="#FFFFFF" fontWeight={'200'}>
            <Link href="#" _hover={{ textDecoration: 'underline' }}>
              Commercial Arbitration
            </Link>
            <Link href="#" _hover={{ textDecoration: 'underline' }}>
              Investment Arbitration
            </Link>
            <Link href="#" _hover={{ textDecoration: 'underline' }}>
              Arbitration-Related Litigation
            </Link>
          </Stack>
        </Box>

        {/* Connect Section */}
        <Box borderTop={'1px solid white'} mt={{ base: '20px', md: '0' }}>
          <Text
            fontSize={{ base: '24px', md: '30px', lg: '35px', xl: '40px' }}
            mt={'36px'}
            fontWeight="700"
            mb={'20px'}
            fontFamily={'Times'}
          >
            Connect
          </Text>
          <Stack spacing={'13px'} borderColor="#FFFFFF" fontWeight={'200'}>
            <Text>contact@neolaw.com</Text>
            <Text>+123 456 789 12</Text>
            <Link href="#" _hover={{ textDecoration: 'underline' }}>
              LinkedIn
            </Link>
            <Link href="#" _hover={{ textDecoration: 'underline' }}>
              Facebook
            </Link>
            <Link href="#" _hover={{ textDecoration: 'underline' }}>
              Instagram
            </Link>
            <Link href="#" _hover={{ textDecoration: 'underline' }}>
              X
            </Link>
          </Stack>
        </Box>

        {/* Contact Form Section */}

        <Box
          borderTop={'1px solid white'}
          mt={{ base: '20px', md: '0' }}
          width={{ base: '100%', xl: '40%' }}
        >
          <Text
            fontSize={{ base: '24px', md: '30px', lg: '35px', xl: '40px' }}
            mt={'36px'}
            fontFamily={'Times'}
            fontWeight="700"
            mb={'20px'}
          >
            Contact
          </Text>
          <Text mb={'33px'} borderColor="#FFFFFF" fontWeight={'200'}>
            Fill out the form below and we will get in touch shortly.
          </Text>
          <Stack spacing={4}>
            {/* Use SimpleGrid for a responsive 2-column layout */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <FormControl>
                <Input
                  placeholder="First Name*"
                  variant="flushed"
                  _placeholder={{ color: 'whiteAlpha.800' }}
                  borderColor="#FFFFFF"
                  fontWeight={'200'}
                  focusBorderColor="white"
                />
              </FormControl>
              <FormControl>
                <Input
                  placeholder="Last Name*"
                  variant="flushed"
                  _placeholder={{ color: 'whiteAlpha.800' }}
                  borderColor="#FFFFFF"
                  fontWeight={'200'}
                  focusBorderColor="white"
                />
              </FormControl>
              <FormControl>
                <Input
                  placeholder="Email*"
                  variant="flushed"
                  _placeholder={{ color: 'whiteAlpha.800' }}
                  borderColor="#FFFFFF"
                  fontWeight={'200'}
                  focusBorderColor="white"
                />
              </FormControl>
              <FormControl>
                <Input
                  placeholder="Subject*"
                  variant="flushed"
                  _placeholder={{ color: 'whiteAlpha.800' }}
                  borderColor="#FFFFFF"
                  fontWeight={'200'}
                  focusBorderColor="white"
                />
              </FormControl>
            </SimpleGrid>

            {/* Message field and button remain full-width */}
            <FormControl>
              <Textarea
                placeholder="Message*"
                variant="flushed"
                _placeholder={{ color: 'whiteAlpha.800' }}
                borderColor="#FFFFFF"
                fontWeight={'200'}
                focusBorderColor="white"
              />
            </FormControl>
            <Button
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: 'whiteAlpha.200' }}
              alignSelf="flex-start"
              fontWeight={'200'}
              borderRadius={0}
              pl={4}
              rightIcon={
                <Icon
                  as={BsChevronRight}
                  // Apply the animation on hover
                  sx={{
                    transition: 'transform 0.2s ease-in-out',
                    '.chakra-button:hover &': {
                      animation: 'slide-right 0.3s forwards', // Apply the animation on hover
                    },
                  }}
                />
              }
            >
              Submit {isMobile && <Text ml={2}>&gt;</Text>}
            </Button>
          </Stack>
        </Box>
      </Flex>
      {/* Large "NEO LAW" watermark */}
      <Flex
        alignItems={'center'}
        mb={'-40px'}
        mt={'40px'}
        justifyContent={'center'}
      >
        <Image src="/image/Footerlogo.png" />
      </Flex>
    </Box>
  );
};

export default Footer;
