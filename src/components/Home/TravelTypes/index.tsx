import { Icon, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { CircleIcon } from "../../../assets/icons";

import { travelTypesList } from './data';

export const TravelTypes = () => {
  const isWiderThanMediumVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Stack
      w="100%"
      maxW={1280}
      px="6"
      mt={['8', '14', '28']}
      mx="auto"
      spacing="5"
      direction="row"
      justify={isWiderThanMediumVersion ? 'space-between' : 'center'}
      flexWrap="wrap"
    >
      {travelTypesList.map(type => (
        <Stack spacing="2" align="center" key={type.title}>
          {isWiderThanMediumVersion && <Icon as={type.icon} />}
          <Text fontSize={['1xl', '2xl']} fontWeight="semibold">
            {!isWiderThanMediumVersion && <CircleIcon boxSize={[3, 4]} color="yellow.400" mr="2" />}
            {type.title}
          </Text>
        </Stack>
      ))}
    </Stack>
  );
};