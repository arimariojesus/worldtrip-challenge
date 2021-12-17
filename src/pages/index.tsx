import { Divider, Text } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Banner } from "../components/Home/Banner";
import { TravelTypes } from "../components/Home/TravelTypes";
import ContinentsSlider from "../components/Home/ContinentsSlider";

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
