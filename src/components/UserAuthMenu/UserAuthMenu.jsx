import { useDispatch,useSelector } from "react-redux";
import { logout } from "redux/auth/auth-operations";
import { selectName } from "redux/auth/auth-selectors";
import { Flex,Button,Text,Heading } from "@chakra-ui/react";

export const UserAuthMenu = () => {
    const dispatch = useDispatch()
    const name = useSelector(selectName)

  return (
      <>
          <Flex justifyContent='center'>
              <Heading size='lg' fontSize='40px'>{`Welcome, ${name}!`}</Heading>
              </Flex>
          <Flex justifyContent='end' >
              <Button colorScheme='teal' size='sm' mb={'10'}><button onClick={() => dispatch(logout())} >Logout</button>
                  </Button>
              </Flex>
    </>
  );
};
