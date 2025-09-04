import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  Link,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  IoIosMegaphone,
  IoIosPaper,
  IoIosBusiness,
  IoIosLock,
  IoIosRocket,
  IoIosHammer,
} from 'react-icons/io';
import NeoButton from '../../common/button';

const PracticeAreaCard = ({ title, description, icon, no }) => (
  <Box
    p={4}
    borderRight={no === '3' ? '0' : '1px' && no === '6' ? '0' : '1px'}
    borderColor="#A8463F"
    transition="border-color 0.2s"
  >
    <Icon as={icon} w={8} h={8} color="#A8463F" mr={3} />

    <Heading
      as="h3"
      fontSize={{
        base: '20px',
        sm: '24px',
        md: '28px',
        lg: '34px',
      }}
      fontWeight="200"
      color={'#A8463F'}
    >
      {title}
    </Heading>
    <Text
      fontSize={{ base: '18px', md: '20px', '2xl': '24px' }}
      fontStyle={'ExtraLight'}
      fontWeight={'200'}
      color="#A8463F"
      mb={4}
    >
      {description}
    </Text>
    <NeoButton>Learn More</NeoButton>
  </Box>
);

const PracticeAreaSection = () => {
  const practiceAreas = [
    {
      no: '1',
      title: 'Technology Law',
      description:
        'Navigating regulations around software, platforms, and emerging technologies.',
      icon: IoIosMegaphone,
    },
    {
      no: '2',
      title: 'Intellectual Property Protection',
      description:
        'Safeguarding your innovations with trademarks, patents, and copyrights.',
      icon: IoIosPaper,
    },
    {
      no: '3',
      title: 'Corporate & M&A',
      description:
        'Structuring smart deals, mitigating risks, and driving business growth.',
      icon: IoIosBusiness,
    },
    {
      no: '4',
      title: 'Data Privacy Compliance',
      description:
        'Helping you stay ahead of GDPR, CCPA, and evolving privacy laws.',
      icon: IoIosLock,
    },
    {
      no: '5',
      title: 'Startups & Venture Capital',
      description:
        'Legal frameworks that scale with your business—from seed to IPO.',
      icon: IoIosRocket,
    },
    {
      no: '6',
      title: 'Dispute Resolution',
      description:
        'Clear, strategic representation to resolve conflicts efficiently.',
      icon: IoIosHammer,
    },
  ];

  return (
    <Box p={8} maxW="1680px" mx="auto">
      <Heading
        as="h2"
        fontSize={{ base: '30px', md: '45px', xl: '60px', '2xl': '80px' }}
        color="#A8463F"
        fontWeight="200"
        whiteSpace="nowrap"
        mb={'10px'}
      >
        OUR{' '}
        <Text as="span" fontStyle="italic" fontFamily={'Times'}>
          PRACTICE AREA
        </Text>
      </Heading>
      <Text
        fontSize={{ base: '18px', md: '20px', '2xl': '24px' }}
        fontStyle={'ExtraLight'}
        fontWeight={'200'}
        color="#A8463F"
        mb={'50px'}
      >
        We provide smart, future-ready legal solutions for startups, tech
        companies, and growing businesses. From IP protection to M&A and
        regulatory compliance, our team combines deep legal insight with a
        modern, tech-driven approach.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {practiceAreas.map((area, index) => (
          <PracticeAreaCard key={index} {...area} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PracticeAreaSection;
