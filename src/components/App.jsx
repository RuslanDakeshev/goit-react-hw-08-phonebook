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

  const titles = [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    },
  ];

  // const particlesInit = useCallback(async engine => {

  //       // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  //       // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //       // starting from v2 you can add only the features you need reducing the bundle size
  //       await loadFull(engine);
  //   }, []);

  //   const particlesLoaded = useCallback(async container => {

  //   }, []);

  return (
    <>
      {/* <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        /> */}

      <Fade cascade>
        <p>I enter first...</p>
        <p>...then comes my turn...</p>
        <p>...and finally you see me!</p>
      </Fade>
      <ChakraProvider theme={theme}>
        <Box as="header" py={2} px="15" bg="tomato">
          <Container maxW="container.lg">
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
          </Container>
        </Box>
      </ChakraProvider>
    </>
  );
};
