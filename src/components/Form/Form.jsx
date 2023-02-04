import { useState } from 'react';

import { addContacts } from 'redux/contacts/contacts-operations';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selector';

import { Input, Button, Box, Flex, Container } from '@chakra-ui/react';

export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isExist = contacts.find(
      contacts => contacts.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      resetForm();
      return;
    }

    const contact = { name, number: phone };
    dispatch(addContacts(contact));

    // onSubmit({ name, number })
    resetForm();
  };

  return (
    <Container
      as={'form'}
      margin={'auto'}
      mb="20px"
      p={'20'}
      maxW="50%"
      onSubmit={handleSubmit}
    >
      <Flex
        as={'form'}
        justifyContent="space-around"
        alignItems="center"
        gap="2"
      >
        <Box mb={'10px'} fontWeight="500" fontSize={'24'}>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            variant={'filled'}
            mb={6}
            border="1px"
            borderColor="gray.200"
            boxShadow="dark-lg"
            focusBorderColor="#FFFFF"
          />
        </Box>

        <Box mb={'10px'} fontWeight="500" fontSize={'24'}>
          Number
          <Input
            type="tel"
            name="number"
            value={phone}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            variant={'filled'}
            mb={6}
            border="1px"
            borderColor="gray.200"
            boxShadow="dark-lg"
            focusBorderColor="#FFFFF"
          />
        </Box>
      </Flex>
      <Flex justifyContent="space-around" alignItems="center">
        <Button
          height="48px"
          width="200px"
          border="1px"
          borderColor="gray.200"
          boxShadow="dark-lg"
          size="lg"
          colorScheme="teal"
          type="submit"
          onClick={e => e.target.blur()}
        >
          Add contact
        </Button>
      </Flex>
    </Container>
  );
};

export default Form;
