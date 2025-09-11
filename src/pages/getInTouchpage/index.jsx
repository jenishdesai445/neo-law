import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import GetInTouchHero from '../../component/GetInTouch/getInTouchHero';
import ContactForm from '../../component/GetInTouch/contactForm';
import OurOffice from '../../component/GetInTouch/ourOffice';

export default function GetInTouchpage() {
  // Reset scroll position on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <GetInTouchHero />
      <ContactForm />
      <OurOffice />
    </Box>
  );
}
