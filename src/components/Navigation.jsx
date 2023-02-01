import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { Header } from './Chakra/HeaderChakra';
import { Button,Flex,Box} from '@chakra-ui/react';


 

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <Box >
    <nav>
      {/* <Header/> */}
      
      <ul>
        <Flex justifyContent='space-between' alignItems="center" gap='2'>
        <li>
         <Button colorScheme='teal' size='sm'>
            <NavLink to="/">Home</NavLink>
            </Button>
        </li>
        {token && (
          <li>
            <Button colorScheme='teal' size='sm'>
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
