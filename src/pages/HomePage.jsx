import { Box, Heading } from '@chakra-ui/react';

export const HomePage = () => {
  return (
    
      <Box mt='100'>
          <Heading as='h1' size='3xl' mb='30' textAlign='center' bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'
          >Phonebook</Heading>
        <Heading as='h1' size='2xl' mb='30' textAlign='center' bgGradient='linear(to-l, #7928CA, #0f0202d4)' bgClip='text'>Save your contacts...</Heading>
      </Box>
    
  );
};
