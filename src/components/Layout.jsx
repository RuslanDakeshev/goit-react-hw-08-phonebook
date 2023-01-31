import { Navigation } from './Navigation';
import { AuthNavigation } from './AuthNavigation';
import { UserAuthMenu } from './UserAuthMenu/UserAuthMenu';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { Outlet } from 'react-router-dom';
import { Divider,Box,Container } from '@chakra-ui/react';


export const Layout = () => {
  const token = useSelector(selectToken);

  return (
    <>
      
          <header>
      <Navigation />
              {token ? <UserAuthMenu /> : <AuthNavigation />}
          </header>
      <main>
        <Box bg='teal.400' mt='10' >
          <Outlet />  
          </Box>
      </main>
      <Divider />
      <footer>
        <Box bg='purple.600' maxWidth='100%' >
        <Container mb='2'
          maxW='md' bg='blue.600' color='white'
          p={30}
          w='100%'>
          Phonebook. Created by Ruslan. 2023
          </Container>
          </Box>
      </footer>
    </>
  );
};
