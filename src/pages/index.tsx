import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { Divider, Text } from "@chakra-ui/react";
import ContinentsSlider from "../components/ContinentsSlider";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      
      <Divider
        mt="16"
        mb="14"
        mx="auto"
        w={90}
        h="2px"
        bg="gray.800"
      />

      <Text fontSize="4xl" textAlign="center" fontWeight="medium">
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>

      <ContinentsSlider />
    </>
  )
}
