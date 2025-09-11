import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import AboutHero from '../../component/AboutUs/aboutHero';
import MissionSection from '../../component/AboutUs/ovrMission';
import FAQSection from '../../component/AboutUs/faqSection';
import OurTeam from '../../component/AboutUs/overTeam';
import OurValuesSection from '../../component/AboutUs/ourValues';
import CeoMessage from '../../component/AboutUs/ceoMessage';

export default function AboutUsPage() {
  // Reset scroll position on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <AboutHero />
      <MissionSection />
      <FAQSection />
      <CeoMessage />
      <OurTeam />
      <OurValuesSection />
    </Box>
  );
}
