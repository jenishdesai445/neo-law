import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import OurExpertiseHero1 from '../../component/OurExpertise/ourExpertiseSection';
import PracticeAreaSection from '../../component/OurExpertise/PracticeAreaCard';
import HowWeWork from '../../component/OurExpertise/howWeWork/HowWeWorkSection';

export default function OurExpertisePages() {
  // Reset scroll position on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <OurExpertiseHero1 />
      <PracticeAreaSection />
      {/* <HowWeWork /> */}
    </Box>
  );
}
