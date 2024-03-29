import { Box, Flex, Heading, Icon, Text, useBreakpointValue } from "@chakra-ui/react";

import Airplane from "../../../assets/images/airplane";

export const Banner = () => {
  const isWiderThanMediumVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box
      w="100%"
      h={isWiderThanMediumVersion ? '335' : 'auto'}
      py={['6', '6', '0']}
      bgImage="url(https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80)"
      bgPos="center 30%"
      mb="8"
    >
      <Flex
        w="100%"
        maxW={1280}
        mx="auto"
        h="100%"
        justify="space-between"
        align="center"
        px="6"
      >
        <Box>
          <Heading
            color="gray.50"
            fontSize={['xl', '2xl', '4xl']}
            lineHeight={!isWiderThanMediumVersion ? 'xl' : 'initial'}
            fontWeight={!isWiderThanMediumVersion ? 'medium' : 'initial'}
            mb={['3', '5']}
          >
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Heading>
          <Text
            color="gray.200"
            fontSize={['sm', 'md', 'xl']}
          >
            Chegou a hora de tirar do papel a viagem que você
            <br />
            sempre sonhou.
          </Text>
        </Box>

        {isWiderThanMediumVersion && (
          <Box alignSelf="flex-end" transform="translateY(33px) rotate(3deg)">
            <Icon as={Airplane} />
          </Box>
        )}
      </Flex>
    </Box>
  );
};
