import { Navigation } from './Navigation';
import { AuthNavigation } from './AuthNavigation';
import { UserAuthMenu } from './UserAuthMenu/UserAuthMenu';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { Outlet } from 'react-router-dom';
import { Divider, Box, Container, Suspense, Spinner, Text } from '@chakra-ui/react';
import { BgParticles } from './Background/Background';


export const Layout = () => {
  const token = useSelector(selectToken);

  return (

    
    
    <Box
      w={'100%'}
      // h="100%"
      minH={'100vh'}
      // bg='transparent'
      
      // bgGradient='linear(to-r, green.200, pink.500)'
      position={'relative'}
      m='0'
      p='5'
    >
      <BgParticles />
      <Box as="header" mx="auto" pt={30} >
        <Navigation />
        {token ? <UserAuthMenu /> : <AuthNavigation />}
      </Box>

      <main>
        <Box pb={'30px'}>
          
          <Outlet />
        </Box>
      </main>

      <Box
        as="footer"
        // pb={'15px'}
        // mt={'auto'}
        pr={'10'}
        position={'absolute'}
        bottom='0'
        w={'100%'}
       
       
        
      >
        <Box pb="20px" pt={30} display="flex" justifyContent="flex-end">
          Phonebook. Created by Ruslan. 2023
        </Box>
      </Box>
    </Box>
  );
};
