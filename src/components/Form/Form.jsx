import { useState } from 'react';


import { Wrapper, Label,  Btn, Container } from './Form.styled';
import { addContacts } from 'redux/contacts/contacts-operations';
// import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selector';

import { Input, Button, Stack } from '@chakra-ui/react';



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
      contacts  => contacts.name.toLowerCase() === name.toLowerCase()
    );
    
    if (isExist) {
       alert(`${name} is already in contacts.`);
      resetForm()
      return
    }

    const contact = { name,number: phone };
    dispatch(addContacts(contact));

    // onSubmit({ name, number })
    resetForm()
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Wrapper>
        <Label>
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
          />
        </Label>
      </Wrapper>

      <Wrapper>
        <Label>
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
          />
        </Label>
      </Wrapper>
      
      <Button 
              alignItems="center"
  height='48px'
  width='200px'
  border='2px' size='lg'colorScheme='teal' type="submit" onClick={e => e.target.blur()}>Add contact</Button>
    </Container>
  );
};



export default Form;
