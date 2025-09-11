// src/components/HowWeWork.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Box, Flex, Text, Heading, Grid, GridItem } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { stepsData } from '../StepsData';
import StepCard from '../StepCard';

gsap.registerPlugin(ScrollTrigger);

const HowWeWork = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const containerRef = useRef(null); // Reference for the main container to pin
  const stepTriggerRefs = useRef([]); // References for the trigger points for each step
  const centerContentRef = useRef(null);

  // Animation for the center content
  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 0.6, ease: 'power2.inOut' },
    });
    timeline
      .fromTo(
        centerContentRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3 }
      )
      .fromTo(
        centerContentRef.current.querySelector('h3'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3 },
        '<0.1'
      )
      .fromTo(
        centerContentRef.current.querySelector('p'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3 },
        '<0.1'
      );
    return () => {
      timeline.kill();
    };
  }, [activeStepIndex]);

  // Set up sequential ScrollTriggers with pinning
  useEffect(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    if (!containerRef.current) return;

    // The main scroll trigger for pinning the entire section
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top', // Start pinning when the top of the section hits the top of the viewport
      end: `+800`, // The end point is relative to the start
      pin: true,
      pinSpacing: false, // Prevents GSAP from adding extra padding
      // markers: true,
    });

    // Create a new ScrollTrigger for each step
    stepsData.forEach((step, index) => {
      ScrollTrigger.create({
        trigger: stepTriggerRefs.current[index],
        start: 'center center',
        onEnter: () => setActiveStepIndex(index),
        // onLeaveBack: () => setActiveStepIndex(index > 0 ? index - 1 : 0),
        // markers: true,
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const activeStep = stepsData[activeStepIndex];

  return (
    <Box
      position="relative"
      p={8}
      bg="#fdf9f7"
      overflow="hidden"
      minHeight="100vh"
      ref={containerRef}
    >
      <Box>
        <Heading
          as="h2"
          fontSize={{ base: '30px', md: '45px', xl: '60px', '2xl': '80px' }}
          color="#A8463F"
          fontWeight="200"
          whiteSpace="nowrap"
          textAlign={'center'}
          mt={'22px'}
          mb={'10px'}
        >
          HOW WE{' '}
          <Text as="span" fontStyle="italic" fontFamily={'Times'}>
            WORK
          </Text>
        </Heading>
        <Flex
          ref={centerContentRef}
          justify="center"
          align="center"
          position="absolute"
          top="30vh"
          left="50%"
          transform="translateX(-50%)"
          zIndex={10}
          minHeight="300px"
          width="300px"
        >
          <Box
            position="relative"
            width="300px"
            height="300px"
            textAlign="center"
            border="1px solid"
            borderColor="gray.400"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            style={{
              clipPath:
                'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          >
            <Heading
              as="h3"
              fontSize="3xl"
              fontWeight="bold"
              color="gray.800"
              fontStyle="italic"
            >
              {activeStep.title}
            </Heading>
            <Text mt={2} color="gray.600">
              {activeStep.description}
            </Text>
          </Box>
        </Flex>

        {/* <Box
          position="absolute"
          top="calc(30vh + 300px)"
          left="50%"
          transform="translateX(-50%)"
          width="1px"
          height="150px"
          borderRight="1px solid"
          borderColor="gray.400"
          zIndex={5}
        /> */}
      </Box>

      <Box position="relative">
        {/* The entire steps layout is rendered below the pinned section */}
        <Flex
          position="absolute"
          top="300px" // Starts right after the pinned section
          left="50%"
          transform="translateX(-50%)"
          width="full"
          //   maxWidth="1200px"
          px={4}
          justify="center"
          alignItems="flex-start"
          py={8}
          zIndex={5}
        >
          {/* Connecting Lines
          <Box
            position="absolute"
            top="50px"
            left="calc(50% - 250px)"
            width="500px"
            height="1px"
            borderBottom="1px solid"
            borderColor="gray.400"
            zIndex={0}
          />
          <Box
            position="absolute"
            top="50px"
            left="50%"
            transform="translateX(-50%)"
            width="1px"
            height="100px"
            borderRight="1px solid"
            borderColor="gray.400"
            zIndex={0}
          /> */}
          <Grid
            templateColumns="repeat(5, 1fr)"
            gap={4}
            alignItems="center"
            justifyItems="center"
            width="full"
          >
            <GridItem colSpan={1}>
              <StepCard
                step={stepsData[0].step}
                isActive={activeStepIndex === 0}
                color={stepsData[0].color}
              />
              <Box
                top="50px"
                left="calc(50% - 250px)"
                width="500px"
                height="1px"
                borderBottom="1px solid"
                borderColor="gray.400"
                zIndex={0}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <StepCard
                step={stepsData[1].step}
                isActive={activeStepIndex === 1}
                color={stepsData[1].color}
              />
            </GridItem>
            <GridItem colSpan={1} mt="100px">
              <StepCard
                step={stepsData[2].step}
                isActive={activeStepIndex === 2}
                color={stepsData[2].color}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <StepCard
                step={stepsData[3].step}
                isActive={activeStepIndex === 3}
                color={stepsData[3].color}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <StepCard
                step={stepsData[4].step}
                isActive={activeStepIndex === 4}
                color={stepsData[4].color}
              />
            </GridItem>
          </Grid>
        </Flex>
      </Box>
    </Box>
  );
};

export default HowWeWork;
