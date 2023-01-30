import { useDispatch,useSelector } from "react-redux";
import { logout } from "redux/auth/auth-operations";
import { selectName } from "redux/auth/auth-selectors";
import { Flex,Button } from "@chakra-ui/react";

export const UserAuthMenu = () => {
    const dispatch = useDispatch()
    const name = useSelector(selectName)

  return (
      <>
          <Flex justifyContent='center'>
              <p>{`Welcome, ${name}!`}</p>
              </Flex>
          <Flex justifyContent='end' >
              <Button colorScheme='teal' size='sm' ><button onClick={() => dispatch(logout())} >Logout</button>
                  </Button>
              </Flex>
    </>
  );
};
