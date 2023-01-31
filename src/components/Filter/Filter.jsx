
import { useDispatch} from "react-redux"

import { Wrapper, Label } from "./Filter.styled"

import { filterReducer } from "redux/filter/filterSlice"

import { Flex, Text, Input } from "@chakra-ui/react"


export const Filter = () => {

  const dispatch = useDispatch()


  return (
    <Flex align="center" justify="center">
    <Wrapper>
      <Text
  fontSize="4xl"
  fontWeight="extrabold"
  
  >Find contacts by name</Text>
      <Input variant={'filled'}
            mb={6} type="text" name='filter' pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={e => dispatch(filterReducer(e.target.value))}
      required />
      </Wrapper>
      </Flex>
      )
}



