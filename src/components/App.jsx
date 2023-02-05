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

// import { Form } from '../components/Form/Form';
// import { Filter } from 'components/Filter/Filter';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Title, Subtitle } from './App.styled';
// import { RegisterForm } from './RegisterForm/RegisterForm';
// import { LoginForm } from './LoginForm/LoginForm';
// import { UserAuthMenu } from './UserAuthMenu/UserAuthMenu';

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
import { RestrictedRoute } from 'HOCs/RestrictedRoute';
import { useSelector } from 'react-redux';
import { selectIsFetchingCurrentUser, selectIsLoggedIn } from 'redux/auth/auth-selectors';


import {
  extendTheme,
  ChakraProvider,
  Container,
  Box,
  
} from '@chakra-ui/react';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
        <Container maxW="100%" pl={'0'} pr="0">
          <Box
            as="header"
            // bgGradient='linear(to-r, green.200, pink.500)'
          >
            {!isFetchingCurrentUser && (
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route
                    index
                    element={
                      <RestrictedRoute
                      redirectTo="/contacts"
                        component = {<HomePage />}
                      />
                    }
                  />
                  <Route
                    path="/contacts"
                    element={
                      <PrivateRoute
                        redirectTo="/login"
                        component={<UsersPage />}
                      />
                    }
                  />
                  <Route
                    path="register"
                    element={
                      <RestrictedRoute
                      redirectTo="/contacts"
                        component={<RegisterPage />}
                      />
                    }
                  />
                  <Route
                    path="login"
                    element={
                      <RestrictedRoute
                        redirectTo="/contacts"
                        component={<LoginPage />}
                      />
                    }
                  />
                  {isLoggedIn ? (
            <Route path="*" element={<UsersPage />} />
          ) : (
            <Route path="*" element={<HomePage />} />
          )}
                </Route>
              </Routes>
            )}
          </Box>
        </Container>
      </ChakraProvider>
    </>
  );
};
