'use client';
// Chakra imports
import { Flex, useColorModeValue, Text } from '@chakra-ui/react';

// import { HorizonLogo } from '@/components/icons/Icons';
// import { HSeparator } from '@/components/separator/Separator';

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex alignItems="center" flexDirection="column">
      <Text
        // color={grayColor}
        fontWeight="500"
        fontSize="xl"
        lineHeight="28px"
        mb="22px"
      >
        Seller Assistance
      </Text>
    </Flex>
  );
}

export default SidebarBrand;
