import { Icon, Stack, Text } from "@chakra-ui/react";
import { BuildingIcon, CocktailIcon, EarthIcon, MuseumIcon, SurfIcon } from "../../assets/icons";

export const TravelTypes = () => {
  return (
    <Stack
      w="100%"
      maxW={1200}
      px="6"
      mt="28"
      mx="auto"
      spacing="5"
      direction="row"
      justify="space-between"
    >
      <Stack spacing="2" align="center">
        <Icon as={CocktailIcon} />
        <Text fontSize="2xl" fontWeight="semibold">vida noturna</Text>
      </Stack>
      <Stack spacing="2" align="center">
        <Icon as={SurfIcon} />
        <Text fontSize="2xl" fontWeight="semibold">praia</Text>
      </Stack>
      <Stack spacing="2" align="center">
        <Icon as={BuildingIcon} />
        <Text fontSize="2xl" fontWeight="semibold">moderno</Text>
      </Stack>
      <Stack spacing="2" align="center">
        <Icon as={MuseumIcon} />
        <Text fontSize="2xl" fontWeight="semibold">clássico</Text>
      </Stack>
      <Stack spacing="2" align="center">
        <Icon as={EarthIcon} />
        <Text fontSize="2xl" fontWeight="semibold">e mais...</Text>
      </Stack>
    </Stack>
  );
};