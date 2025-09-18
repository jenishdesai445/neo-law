import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/header';
import Footer from './component/footer';
import HomePage from './pages/homePage';
import AboutUsPage from './pages/aboutUsPage';
import OurExpertisePages from './pages/ourExpertisePage';
import GetInTouchpage from './pages/getInTouchpage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box
          position="sticky"
          top="0"
          zIndex="10"
          width="100%"
          bg="your-background-color"
          backdropFilter="blur(10px)"
        >
          <Header />
        </Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/our-expertise" element={<OurExpertisePages />} />
          <Route path="/get-in-touch" element={<GetInTouchpage />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
