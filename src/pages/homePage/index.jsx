import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import SpinningText from '../../component/Home/pulseRing';
import HeroSectionBottom2 from '../../component/Home/HeroSectionBottom2';
import HeroSectionBottom from '../../component/Home/heroBottom';
import ScrollingText from '../../component/Home/ScrollingText';
import ExpertiseSection from '../../component/Home/ExpertiseSection';
import OurArticle from '../../component/Home/OurArticle';
import ImageHeroSection from '../../component/Home/hero';

export default function HomePage() {
  // Reset scroll position on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <Box position={'relative'}>
        <ImageHeroSection />
        <Box
          position={'absolute'}
          right={{ base: '20px', xl: '58px' }}
          bottom={{ base: '180px', sm: '150px', md: '120px', xl: '230px' }}
        >
          <SpinningText />
        </Box>
        <HeroSectionBottom2 />
      </Box>
      <HeroSectionBottom />
      <Box my={{ base: '50px', md: '60px', lg: '80px', xl: '100px' }}>
        <ScrollingText />
      </Box>
      <ExpertiseSection />
      <OurArticle />
    </Box>
  );
}
