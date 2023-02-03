import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

import { Button,Flex,Box} from '@chakra-ui/react';


 

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <Box >
    <nav>
     
      
      <ul>
        <Flex justifyContent='space-between' alignItems="center" gap='2'>
        <li>
         <Button colorScheme='teal' size='sm' w={'100px'}>
            <NavLink to="/">Home</NavLink>
            </Button>
        </li>
        {token && (
          <li>
            <Button colorScheme='teal' size='sm' w={'100px'}>
              <NavLink to="users">Users</NavLink>
              </Button>
          </li>
          )}
          </Flex>
        </ul>
        
      </nav>
      </Box>
  );
};
