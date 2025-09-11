// src/components/StepCard.jsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const StepCard = ({ step, isActive, color }) => {
  return (
    <Box
      width="100px"
      height="100px"
      border="1px solid"
      borderColor="gray.400"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      zIndex={1}
      bg={isActive ? color : 'white'}
      transition="background-color 0.5s ease"
      style={{
        clipPath:
          'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      }}
    >
      <Text
        fontSize="sm"
        fontWeight="bold"
        color={isActive ? 'gray.800' : 'gray.600'}
      >
        {step}
      </Text>
    </Box>
  );
};

export default StepCard;
