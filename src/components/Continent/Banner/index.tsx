import { AspectRatio, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export const Banner = () => {
  const isWiderThanMediumVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <AspectRatio
      ratio={1440 / 500}
      bgImage="url(https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)"
      bgRepeat="no-repeat"
      bgSize="100%"
    >
      <Flex bg="rgba(0,0,0,0.15)">
        <Flex
          maxWidth={1280}
          w="100%"
          h="100%"
          px="6"
          py="14"
          mx="auto"
          align={isWiderThanMediumVersion ? "flex-end" : "center"}
          justify={isWiderThanMediumVersion ? "flex-start" : "center"}
        >
          <Text
            fontSize={["3xl", "4xl", "5xl"]}
            fontWeight="semibold"
            color="gray.50"
          >
            Europe
          </Text>
        </Flex>
      </Flex>
    </AspectRatio>
  );
};
