import PropTypes from 'prop-types';
import {
  Btn,
  Contacts,
  ContactsItem,
  Name,
  Number,
} from './ContactList.styled';
import { useDispatch } from 'react-redux';
import {
  deleteContacts,
  fetchContacts,
} from 'redux/contacts/contacts-operations';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts-selector';
import { selectFilter } from 'redux/filter/filter-selector';
import { useEffect } from 'react';

import { Fade } from "react-awesome-reveal";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <Contacts>
      {isLoading && <h1>LOADING...</h1>}
      {filteredContacts.map(({ name, number, id }) => (
        
        <ContactsItem key={id}>
          <Fade direction='down' >
          <Name>{name}</Name>
          <Number>{number}</Number>
          <Btn type="button" onClick={() => dispatch(deleteContacts(id))}>
            Delete
            </Btn>
            </Fade>
          </ContactsItem>
          
      ))}
      {error && <p>{error.message}</p>}
    </Contacts>
  );
};

ContactList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
