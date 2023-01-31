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

import { Fade } from 'react-awesome-reveal';
import {
  Box,
  Flex,
  FormControl,
  DeleteIcon,
  IconButton,
  Button,
  Text,
} from '@chakra-ui/react';

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
    <Box>
      {isLoading && <h1>LOADING...</h1>}
      {filteredContacts.map(({ name, number, id }) => (
        <Fade direction="down">
          <Box
            border="1px"
            borderColor="gray.200"
            boxShadow="dark-lg"
            p="6"
            rounded="md"
            bgGradient="linear(to-r, green.200, pink.500)"
            mb="5"
          >
            <Flex
              justifyContent="space-around"
              alignItems="center"
              gap="2"
              key={id}
            >
              <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="xl"
                fontWeight="extrabold"
              >
                {name}
              </Text>
              <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="xl"
                fontWeight="extrabold"
              >
                {number}
              </Text>
              <Button
                colorScheme={'teal'}
                type="button"
                onClick={() => dispatch(deleteContacts(id))}
              >
                Delete
              </Button>
            </Flex>
          </Box>
        </Fade>
      ))}
      {error && <p>{error.message}</p>}
    </Box>
  );
};

ContactList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
