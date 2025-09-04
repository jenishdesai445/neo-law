import { Box, Flex, SimpleGrid, Text, Image } from '@chakra-ui/react';

const MissionSection = () => {
  return (
    <Box bg={'#FFF0DB'}>
      <Box
        maxW={'1679px'}
        margin={'auto'}
        px={{ base: '20px' }}
        pt={{ base: '50px', '2xl': '107px' }}
      >
        <Flex
          gap={{ base: '20px', md: '40px', xl: '60px', '2xl': '97px' }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Text
            fontSize={{ base: '30px', md: '45px', xl: '60px', '2xl': '80px' }}
            fontWeight="200"
            color="#A8463F"
          >
            OUR{' '}
            <Text as={'span'} fontFamily={'Times'}>
              {' '}
              MISSION
            </Text>
          </Text>
          <Text
            fontSize={{
              base: '20px',
              sm: '24px',
              md: '28px',
              lg: '34px',
              '2xl': '40px',
            }}
            fontWeight={'200'}
            color="#A8463F"
          >
            At NEO Legal, our mission is simple: to{' '}
            <Text as="span" fontFamily={'Times'}>
              redefine legal services
            </Text>{' '}
            for the{' '}
            <Text as="span" fontFamily={'Times'}>
              modern era.
            </Text>{' '}
            We combine deep legal expertise with technology-driven efficiency to{' '}
            <Text as="span" fontFamily={'Times'}>
              deliver faster, smarter, and more transparent solutions
            </Text>
            . From{' '}
            <Text as="span" fontStyle="italic" fontFamily={'Times'}>
              ambitious startups
            </Text>{' '}
            to{' '}
            <Text as="span" fontStyle="italic" fontFamily={'Times'}>
              established enterprises
            </Text>
            , we empower clients to innovate boldly while staying legally
            secure.
          </Text>
        </Flex>

        {/* Team Images Section */}
        <Flex justifyContent="center" mt={{ base: 8, md: 0 }}>
          {/* You would replace these with actual Image components 
            and source URLs for the team members. 
            For this example, I'm using placeholder Box components.
          */}
          <Flex
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            gap={4}
            w="100%"
          >
            {/* These Box components are placeholders for the team images */}
            <Box>
              <Image
                src="/image/medium-shot-business-people.png"
                alt="Team member 1"
                w="100%"
                h="100%"
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default MissionSection;
