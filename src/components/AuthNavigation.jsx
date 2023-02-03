import { Link } from 'react-router-dom';
import { Flex,Button } from '@chakra-ui/react';

export const AuthNavigation = () => {
  return (
    <nav>
      <ul>
        <Flex justifyContent="end"  gap='2' mb={'10'} >
          <li>
            <Button colorScheme='teal' size='sm'><Link to='register'>Register</Link></Button>
          </li>
          <li>
            <Button colorScheme='teal' size='sm'><Link to="login">Login</Link></Button>
          </li>
        </Flex>
      </ul>
    </nav>
  );
};
