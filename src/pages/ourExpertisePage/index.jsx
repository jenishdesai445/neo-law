import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import OurExpertiseHero1 from '../../component/OurExpertise/ourExpertiseSection';
import PracticeAreaSection from '../../component/OurExpertise/PracticeAreaCard';
import HowWeWork from '../../component/OurExpertise/howWeWork/HowWeWorkSection';
import OurValuesSection from '../../component/AboutUs/ourValues';

export default function OurExpertisePages() {
  // Reset scroll position on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <OurExpertiseHero1 />
      <PracticeAreaSection />
      <Box pt={{ base: '50px', md: '60px', lg: '80px', xl: '100px' }}>
        <OurValuesSection title1={'How We'} title2={'WORK'} />
      </Box>
      {/* <HowWeWork /> */}
    </Box>
  );
}
