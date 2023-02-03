import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';

import { Input, Flex, Heading, Button } from '@chakra-ui/react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex justifyContent="space-around" alignItems="center">
        <Flex
          direction={'column'}
          background={'gray.200'}
          p={12}
          rounded={6}
          position={'relative'}
          width="600px"
        >
          <Heading mb={6}>Log In</Heading>
          <label>
            Email:
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="your email"
              variant={'filled'}
              mb={3}
            />
          </label>
          <label>
            Password:
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="***********"
              variant={'filled'}
              mb={6}
            />
          </label>
          <Button colorScheme={'teal'} type="submit">
            Log In
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
