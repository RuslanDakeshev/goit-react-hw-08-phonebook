import { Image, Box, Flex, Container, Text,useColorMode } from '@chakra-ui/react';

export const Header = () => {

    const colorMode = useColorMode()
    return (
      <Box as="header" py={2} px="15" bg="tomato">
        <Container maxW="container.lg">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>Phonebook</Text>
            <Image
              src="https://www.shutterstock.com/image-vector/logo-social-media-de-redes-600w-2098354567.jpg"
              alt="logo"
              boxSize="150px"
            />
          </Flex>
        </Container>
      </Box>
    );
}
