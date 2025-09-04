import React from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { BsChevronRight } from 'react-icons/bs';

const NeoButton = ({
  children,
  variant = 'outline',
  borderColor = '#b46464',
  color = '#b46464',
  size = 'lg',
  borderRadius = '0',
  fontWeight = '200',
  px = 8,
  rightIcon = true,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      borderColor={borderColor}
      color={color}
      size={size}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      px={px}
      rightIcon={
        rightIcon ? (
          <Icon
            as={BsChevronRight}
            sx={{
              transition: 'transform 0.2s ease-in-out',
              '.chakra-button:hover &': {
                animation: 'slide-right 0.3s forwards',
              },
            }}
          />
        ) : undefined
      }
      _hover={{ bg: '#fbf0ef' }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default NeoButton;
