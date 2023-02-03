// import { Form } from '../components/Form/Form';
// import { Filter } from 'components/Filter/Filter';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Container, Title, Subtitle } from './App.styled';
// import { RegisterForm } from './RegisterForm/RegisterForm';
// import { LoginForm } from './LoginForm/LoginForm';
// import { UserAuthMenu } from './UserAuthMenu/UserAuthMenu';

// export const App = () => {
//   return (
//     <Container>
//       <RegisterForm />
//       <LoginForm />
//       <UserAuthMenu/>
//       <Title>Phonebook</Title>
//       <Form />
//       <Subtitle>Contacts</Subtitle>
//       <Filter />
//       <ContactList />
//     </Container>
//   );
// };

import { Form } from '../components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Title, Subtitle } from './App.styled';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm/LoginForm';
import { UserAuthMenu } from './UserAuthMenu/UserAuthMenu';

import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { UsersPage } from 'pages/UsersPage';
import { Layout } from './Layout';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from 'HOCs/PrivateRoute';
import { PublicRoute } from 'HOCs/PublicRoute';
import { useSelector } from 'react-redux';
import { selectIsFetchingCurrentUser } from 'redux/auth/auth-selectors';
import { BgParticles } from './Background/Background';

import { Fade } from 'react-awesome-reveal';
import { Header } from './Chakra/HeaderChakra';
import { CardListChakra } from './Chakra/CardListChakra';
import { ModalChakra } from './Chakra/ModalChakra';
import {
  extendTheme,
  ChakraProvider,
  Container,
  Box,
  Heading,
  Divider,
  Flex,
  Image,
  Spacer,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';

import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const theme = extendTheme({
    colors: {
      brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
      },
    },
  });


  return (
    <>
      
     
      <ChakraProvider theme={theme}>
        <Container maxW="100%" pl={'0'} pr='0'>
          
        <Box as="header" 
          // bgGradient='linear(to-r, green.200, pink.500)'
        >
          
            {/* <Header />
      <Container maxW='container.lg'>
        <Box py='2' px='15'>
          <Heading size='xl'>
            Hello in USER'S APP!
          </Heading>
        </Box>
        <Divider />
        <CardListChakra cards={titles} />
        <ModalChakra/>
        
      </Container> */}
            {!isFetchingCurrentUser && (
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route
                    index
                    element={
                      <PublicRoute>
                        <HomePage />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="users"
                    element={
                      <PrivateRoute>
                        <UsersPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="register"
                    element={
                      <PublicRoute restricted>
                        <RegisterPage />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="login"
                    element={
                      <PublicRoute restricted>
                        <LoginPage />
                      </PublicRoute>
                    }
                  />
                </Route>
              </Routes>
            )}
          
          </Box>
          
          </Container>
      </ChakraProvider>
       
    </>
  );
};
