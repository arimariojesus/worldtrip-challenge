import { Box, Flex, Icon, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import Back from '../../assets/icons/back';
import Logo from '../../assets/images/logo';

export const Header = () => {
  const { asPath } = useRouter();
  const outHome = asPath !== '/';

  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      w="100%"
      px="6"
      maxW={1200}
      h="90"
      mx="auto"
    >
      {outHome && (
        <Link href="/" passHref>
          <ChakraLink justifySelf="left">
            <Icon as={Back} />
          </ChakraLink>
        </Link>
      )}
      <Box mx="auto">
        <Icon as={Logo} />
      </Box>
    </Flex>
  );
};
