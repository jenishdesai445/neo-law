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

      // display="flex"
      // alignItems="center"
      // justifyContent="space-between"
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
                {/* <FormLabel
                  fontSize={{
                    base: '20px',
                    sm: '24px',
                    md: '28px',
                    xl: '34px',
                    '2xl': '40px',
                  }}
                  color="#FFF0DB"
                  fontWeight={'200'}
                >
                  First Name*
                </FormLabel> */}
                <Input
                  variant="flushed"
                  placeholder="First Name*"
                  borderColor={inputBorderColor}
                  _focus={{ borderColor: '#FFF0DB' }}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  fontSize={{
                    base: '20px',
                    sm: '24px',
                    md: '28px',
                    xl: '34px',
                    '2xl': '40px',
                  }}
                  color="#FFF0DB"
                  fontWeight={'200'}
                >
                  Last Name*
                </FormLabel>
                <Input
                  variant="flushed"
                  borderColor={inputBorderColor}
                  _focus={{ borderColor: '#FFF0DB' }}
                />
              </FormControl>
            </Flex>
            <Flex
              w="100%"
              direction={{ base: 'column', sm: 'row' }}
              gap={{ base: 6, sm: 8 }}
            >
              <FormControl>
                <FormLabel
                  fontSize={{
                    base: '20px',
                    sm: '24px',
                    md: '28px',
                    xl: '34px',
                    '2xl': '40px',
                  }}
                  color="#FFF0DB"
                  fontWeight={'200'}
                >
                  Email*
                </FormLabel>
                <Input
                  variant="flushed"
                  borderColor={inputBorderColor}
                  _focus={{ borderColor: '#FFF0DB' }}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  fontSize={{
                    base: '20px',
                    sm: '24px',
                    md: '28px',
                    xl: '34px',
                    '2xl': '40px',
                  }}
                  color="#FFF0DB"
                  fontWeight={'200'}
                >
                  Subject*
                </FormLabel>
                <Input
                  variant="flushed"
                  borderColor={inputBorderColor}
                  _focus={{ borderColor: '#FFF0DB' }}
                />
              </FormControl>
            </Flex>
            <FormControl w="100%">
              <FormLabel
                fontSize={{
                  base: '20px',
                  sm: '24px',
                  md: '28px',
                  xl: '34px',
                  '2xl': '40px',
                }}
                color="#FFF0DB"
                fontWeight={'200'}
              >
                Message*
              </FormLabel>
              <Textarea
                variant="flushed"
                borderColor={inputBorderColor}
                _focus={{ borderColor: '#FFF0DB' }}
                resize="none"
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
