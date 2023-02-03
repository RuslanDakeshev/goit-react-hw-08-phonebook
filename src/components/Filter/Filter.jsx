import { useDispatch } from 'react-redux';


import { filterReducer } from 'redux/filter/filterSlice';

import { Flex, Text, Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Flex align={'center'} justify={'flex-end'}>
      
      <Input
        variant={'filled'}
        placeholder="Find contact by name"
        mb={6}
        w="200px"
        pl="15px"
        border="1px"
            borderColor="gray.200"
        boxShadow="dark-lg"
        focusBorderColor="#FFFFF"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={e => dispatch(filterReducer(e.target.value))}
        required
      />
    </Flex>

    // <Flex align={'center'} justify={'flex-end'} mb="20px">
    //   <Input
    //     variant=""
    //     borderColor="#613975"
    //     autoComplete="off"
    //     focusBorderColor="#FC0A7E"
    //     w="200px"
    //     pl="15px"
    //     type="text"
    //     placeholder="Find contact by name"
    //     name="filter"
    //     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //     onChange={e => dispatch(filterReducer(e.target.value))}
    //   />

    // </Flex>
  );
};
