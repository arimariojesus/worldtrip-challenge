import { Box, Flex, Icon, Image, Link as ChakraLink, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiChevronLeft } from 'react-icons/fi';

export const Header = () => {
  const { asPath } = useRouter();
  const outHome = asPath !== '/';
  const isWiderThanMediumVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      w="100%"
      px="6"
      maxW={1280}
      h={isWiderThanMediumVersion ? '90' : '50'}
      mx="auto"
    >
      {outHome && (
        <Link href="/" passHref>
          <ChakraLink justifySelf="left">
            <Icon as={FiChevronLeft} fontSize={['1rem', '2rem']} />
          </ChakraLink>
        </Link>
      )}
      <Box mx="auto">
        <Image
          src="/assets/images/logo.svg"
          alt="World Trip"
          w={!isWiderThanMediumVersion && '81px'}
        />
      </Box>
    </Flex>
  );
};
