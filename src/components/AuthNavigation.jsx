import { Link } from 'react-router-dom';
import { Flex,Button } from '@chakra-ui/react';

export const AuthNavigation = () => {
  return (
    <nav>
      <ul>
        <Flex flexDirection={'column'}  alignItems="start" justifyContent="end"  gap='2' mt={'10px'} >
          <li>
            <Button colorScheme='teal' size='sm' w={'100px'}><Link to='register'>Register</Link></Button>
          </li>
          <li>
            <Button colorScheme='teal' size='sm' w={'100px'}><Link to="login">Login</Link></Button>
          </li>
        </Flex>
      </ul>
    </nav>
  );
};
