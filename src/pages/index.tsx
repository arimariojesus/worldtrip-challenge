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
        mt={['8', '14', '16']}
        mb={['6', '12', '14']}
        mx="auto"
        w={90}
        h="2px"
        bg="gray.800"
      />

      <Text fontSize={['xl', '2xl', '4xl']} textAlign="center" fontWeight="medium">
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>

      <ContinentsSlider />
    </>
  )
}
