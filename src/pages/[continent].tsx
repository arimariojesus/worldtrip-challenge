import { AspectRatio, Box, Flex, Heading, SimpleGrid, Stack, Text, Image } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";
import { Banner } from "../components/Continent/Banner";
import { Header } from "../components/Header";

export default function Continent() {
  return (
    <>
      <Header />
      
      <Banner />

      <Box w="100%" maxWidth={1280} mx="auto" px="6">
        <Stack
          direction="row"
          spacing="14"
          align="center"
          justify="space-between"
          w="100%"
          my="20"
        >
          <Text fontSize="2xl" textAlign="justify" color="gray.500" w="50%">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
            rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          
          <Stack
            direction="row"
            spacing="2"
            justify="space-around"
            flex="1"
          >
            <Box textAlign="center">
              <Text
                color="yellow.400"
                lineHeight="48px"
                fontSize="5xl"
                fontWeight="semibold"
              >
                50
              </Text>
              <Text
                color="gray.500"
                fontSize="2xl"
                fontWeight="semibold"
              >
                países
              </Text>
            </Box>
            <Box textAlign="center">
              <Text
                color="yellow.400"
                lineHeight="48px"
                fontSize="5xl"
                fontWeight="semibold"
              >
                60
              </Text>
              <Text
                color="gray.500"
                fontSize="2xl"
                fontWeight="semibold"
              >
                línguas
              </Text>
            </Box>
            <Box textAlign="center">
              <Text
                color="yellow.400"
                lineHeight="48px"
                fontSize="5xl"
                fontWeight="semibold"
              >
                27
              </Text>
              <Text
                color="gray.500"
                fontSize="2xl"
                fontWeight="semibold"
              >
                cidades +100
              </Text>
            </Box>
          </Stack>
        </Stack>

        <Box>
          <Heading fontWeight="medium">Cidades +100</Heading>

          <SimpleGrid
            my="12"
            gap="12"
            minChildWidth="256px"
          >
            {Array(5).fill('0').map((_, index) => (
              <Box key={index}>
                <AspectRatio ratio={4 / 3}>
                  <Image src="https://source.unsplash.com/Ab9vQBR6f8E" alt="" objectFit="cover" borderTopRadius="4px" />
                </AspectRatio>
                <Flex
                  align="center"
                  justify="space-between"
                  py="5"
                  px="4"
                  borderBottomRadius="4px"
                  border="1px solid"
                  borderColor="yellow.300"
                >
                  <Box>
                    <Heading
                      as="h3"
                      fontSize="xl"
                      fontWeight="semibold"
                      mb="2"
                    >
                      Londres
                    </Heading>
                    <Text fontSize="md" color="gray.500">Reino Unido</Text>
                  </Box>
                  
                  <ReactCountryFlag
                    svg
                    aria-label="Reino Unido"
                    style={{
                      fontSize: '2rem',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                    countryCode="GB"
                  />
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
