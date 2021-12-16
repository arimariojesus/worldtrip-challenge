import { AspectRatio, Heading, Stack, Text } from "@chakra-ui/react";

export const SliderItem = () => {
  return (
    <AspectRatio
      ratio={1240 / 450}
      bgImage="url(https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1504&q=80)"
      bgPos="center"
    >
      <Stack spacing={4} bg="rgba(0,0,0,0.3)">
        <Heading color="gray.50" fontSize="5xl">Europa</Heading>
        <Text color="gray.200" fontSize="2xl">O continte mais antigo.</Text>
      </Stack>
    </AspectRatio>
  );
};