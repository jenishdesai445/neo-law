import React from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import NeoButton from '../../common/button';

const ContactForm = () => {
  const formBackground = useColorModeValue('#A8463F', '#A8463F');
  const textColor = useColorModeValue('#FFF0DB', '#FFF0DB');
  const inputBorderColor = useColorModeValue('#FFF0DB', '#FFF0DB');

  return (
    <Box
      bg={formBackground}
      py={{ base: '50px', md: '60px', lg: '89px' }}
      color={textColor}
    >
      <Flex
        maxW={{ base: '100%', lg: '80%', lg: '1680px' }}
        px={{ base: '20px' }}
        margin={'auto'}
        alignItems={'center'}
        justify="space-between"
        flexWrap={{ base: 'wrap', lg: 'nowrap' }}
      >
        {/* Left Section: Contact Info */}
        <VStack
          alignItems={{ base: 'center', md: 'start' }}
          spacing={2}
          mb={{ base: 8, md: 0 }}
          pr={{ md: 12 }}
        >
          <Text
            fontSize={{ base: '18px', md: '30px' }}
            fontWeight={'200'}
            color={'#FFF0DB'}
          >
            contact@wordstone.com
          </Text>
          <Text
            fontSize={{ base: '18px', md: '30px' }}
            fontWeight={'200'}
            color={'#FFF0DB'}
          >
            +33 1 59 44 08 66
          </Text>
        </VStack>

        {/* Right Section: Form */}
        <Box w={{ base: '100%', lg: '70%' }} mt={{ base: '30px', lg: '0' }}>
          <Text
            fontSize={{
              base: '20px',
              sm: '24px',
              md: '28px',
              lg: '34px',
              '2xl': '40px',
            }}
            color="#FFF0DB"
            fontWeight={'200'}
            textAlign={{ base: 'center', md: 'left' }}
          >
            Fill out the form below and we will get in touch shortly.
          </Text>
          <VStack
            spacing={{ base: '20px', lg: '45px' }}
            mt={{ base: '30px', lg: '67px' }}
          >
            <Flex
              w="100%"
              direction={{ base: 'column', sm: 'row' }}
              gap={{ base: 6, sm: 8 }}
            >
              <FormControl>
                {/* <Input
                  variant="flushed"
                  placeholder="First Name*"
                
                  textColor={'#FFF0DB'}
                  borderColor={inputBorderColor}
                  _focus={{ borderColor: '#FFF0DB' }}
                  _placeholder={{ color: '#FFF0DB' }} // Added this line
                /> */}
                <Input
                  placeholder="First Name*"
                  variant="flushed"
                  _placeholder={{ color: 'whiteAlpha.800' }}
                  fontSize={{
                    base: '20px',
                    sm: '24px',
                  }}
                  borderColor="#FFF0DB"
                  fontWeight={'200'}
                  focusBorderColor="white"
                />
              </FormControl>
              <FormControl>
                {/* <Input
                  variant="flushed"
                  borderColor={inputBorderColor}
                  placeholder="Last Name*"
                  fontSize={{
                    base: '20px',
                    sm: '24px',
                  }}
                  textColor={'#FFF0DB'}
                  _focus={{ borderColor: '#FFF0DB' }}
                  _placeholder={{ color: '#FFF0DB' }} // Added this line
                /> */}
                <Input
                  placeholder="Last Name*"
                  variant="flushed"
                  _placeholder={{ color: 'whiteAlpha.800' }}
                  fontSize={{
                    base: '20px',
                    sm: '24px',
                  }}
                  borderColor="#FFF0DB"
                  fontWeight={'200'}
                  focusBorderColor="white"
                />
              </FormControl>
            </Flex>
            <Flex
              w="100%"
              direction={{ base: 'column', sm: 'row' }}
              gap={{ base: 6, sm: 8 }}
            >
              <FormControl>
                {/* <Input
                  variant="flushed"
                  placeholder="Email*"
                  fontSize={{
                    base: '20px',
                    sm: '24px',
                  }}
                  textColor={'#FFF0DB'}
                  borderColor={inputBorderColor}
                  _focus={{ borderColor: '#FFF0DB' }}
                  _placeholder={{ color: '#FFF0DB' }} // Added this line
                /> */}
                <Input
                  placeholder="Email*"
                  variant="flushed"
                  _placeholder={{ color: 'whiteAlpha.800' }}
                  fontSize={{
                    base: '20px',
                    sm: '24px',
                  }}
                  borderColor="#FFF0DB"
                  fontWeight={'200'}
                  focusBorderColor="white"
                />
              </FormControl>
              <FormControl>
                {/* <Input
                  variant="flushed"
                  placeholder="Subject*"
                  fontSize={{
                    base: '20px',
                    sm: '24px',
                  }}
                  textColor={'#FFF0DB'}
                  borderColor={inputBorderColor}
                  _focus={{ borderColor: '#FFF0DB' }}
                  _placeholder={{ color: '#FFF0DB' }} // Added this line
                /> */}
                <Input
                  placeholder="Subject*"
                  variant="flushed"
                  _placeholder={{ color: 'whiteAlpha.800' }}
                  fontSize={{
                    base: '20px',
                    sm: '24px',
                  }}
                  borderColor="#FFF0DB"
                  fontWeight={'200'}
                  focusBorderColor="white"
                />
              </FormControl>
            </Flex>
            <FormControl w="100%">
              {/* <Textarea
                variant="flushed"
                placeholder="Message*"
                textColor={'#FFF0DB'}
                borderColor={inputBorderColor}
                _focus={{ borderColor: '#FFF0DB' }}
                _placeholder={{ color: '#FFF0DB' }} // Added this line
                resize="none"
              /> */}
              <Textarea
                placeholder="Message*"
                variant="flushed"
                fontSize={{
                  base: '20px',
                  sm: '24px',
                }}
                _placeholder={{ color: 'whiteAlpha.800' }}
                borderColor="#FFF0DB"
                fontWeight={'200'}
                focusBorderColor="white"
              />
            </FormControl>

            <NeoButton
              color="#FFF0DB"
              borderColor="#FFF0DB"
              _hover={{ bg: '#FFF0DB', color: '#A8463F' }}
              alignSelf="flex-start"
            >
              Send Message
            </NeoButton>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactForm;
