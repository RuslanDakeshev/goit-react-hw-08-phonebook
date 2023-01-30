import { SimpleGrid, Stack, Button, Heading, Text } from '@chakra-ui/react';

export const CardListChakra = props => {
  const { cards = [] } = props;

  return (
    <SimpleGrid columns={3} spacing={15} py="4" px="15">
      {cards.map(card => (
        <Stack key={card.title} spacing={2} _hover={{ shadow: 'md' }} p={2}>
          <Heading as="h3" isTruncated>
            {card.title}
          </Heading>
          <Text>{card.body}</Text>
          <Button colorScheme="brand" as="" variant="outline" size='xl' href="">
            Read more
          </Button>
        </Stack>
      ))}
    </SimpleGrid>
  );
};
