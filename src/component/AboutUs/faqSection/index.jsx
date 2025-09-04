import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { GoPlus } from 'react-icons/go';
import NeoButton from '../../common/button';

// Your custom animated icon component
const AnimatedPlusIcon = ({ isExpanded }) => {
  return (
    <Box
      as={motion.div}
      animate={{ rotate: isExpanded ? 45 : 0 }}
      transition={{ duration: 0.2 }}
      fontSize={{ base: '24px', md: '30px', lg: '40px', '2xl': '60px' }} // Optional: Match text size
    >
      <GoPlus />
    </Box>
  );
};

function FAQSection() {
  return (
    <Accordion
      allowToggle
      py={{ base: '50px', md: '70px', lg: '100px', '2xl': '170px' }}
      color={'#A8463F'}
    >
      <AccordionItem
        borderTop={'1px solid #A8463F'}
        py={{ base: '15px', xl: '30px' }}
      >
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton _hover={{ bg: 'white' }}>
                <Box as="span" flex="1" textAlign="left">
                  <Text
                    fontSize={{
                      base: '24px',
                      md: '30px',
                      lg: '40px',
                      '2xl': '60px',
                    }}
                    fontWeight={'200'}
                  >
                    Who We Serve
                  </Text>
                </Box>
                <AnimatedPlusIcon isExpanded={isExpanded} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                fontSize={{ base: '18px', md: '20px', '2xl': '24px' }}
                fontStyle={'ExtraLight'}
                fontWeight={'200'}
                mb={'20px'}
              >
                We partner with startups, entrepreneurs, and growing businesses
                that want clear, modern legal support. Our focus is on
                innovators who need agile strategies to protect ideas, structure
                deals, and scale with confidence.
              </Text>
              <NeoButton>Learn More</NeoButton>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem borderTop={'1px solid #A8463F'}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton _hover={{ bg: 'white' }}>
                <Box as="span" flex="1" textAlign="left">
                  <Text
                    fontSize={{
                      base: '24px',
                      md: '30px',
                      lg: '40px',
                      '2xl': '60px',
                    }}
                    fontWeight={'200'}
                  >
                    Our Approach
                  </Text>
                </Box>
                <AnimatedPlusIcon isExpanded={isExpanded} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                fontSize={{ base: '18px', md: '20px', '2xl': '24px' }}
                fontStyle={'ExtraLight'}
                fontWeight={'200'}
              >
                // Your content for "Our Approach"
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem
        borderTop={'1px solid #A8463F'}
        borderBottom={'1px solid #A8463F'}
      >
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton _hover={{ bg: 'white' }}>
                <Box as="span" flex="1" textAlign="left">
                  <Text
                    fontSize={{
                      base: '24px',
                      md: '30px',
                      lg: '40px',
                      '2xl': '60px',
                    }}
                    fontWeight={'200'}
                  >
                    Commitment to Clients
                  </Text>
                </Box>
                <AnimatedPlusIcon isExpanded={isExpanded} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                fontSize={{ base: '18px', md: '20px', '2xl': '24px' }}
                fontStyle={'ExtraLight'}
                fontWeight={'200'}
              >
                // Your content for "Commitment to Clients"
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}

export default FAQSection;
