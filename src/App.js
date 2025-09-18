import { ChakraProvider, Box, theme, Spinner, Center } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/header';
import Footer from './component/footer';
import React, { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./pages/homePage'));
const AboutUsPage = lazy(() => import('./pages/aboutUsPage'));
const OurExpertisePages = lazy(() => import('./pages/ourExpertisePage'));
const GetInTouchpage = lazy(() => import('./pages/getInTouchpage'));

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box
          position="sticky"
          top="0"
          zIndex="10"
          width="100%"
          bg="whiteAlpha.900"
          backdropFilter="blur(10px)"
          shadow="sm"
        >
          <Header />
        </Box>

        {/* Suspense fallback loader */}
        <Suspense
          fallback={
            <Center minH="60vh">
              <Spinner size="xl" color="red.500" />
            </Center>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/our-expertise" element={<OurExpertisePages />} />
            <Route path="/get-in-touch" element={<GetInTouchpage />} />
          </Routes>
        </Suspense>

        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
