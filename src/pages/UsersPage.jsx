import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Form } from '../components/Form/Form';
import { Aaa } from "components/Background/Background";

export const UsersPage = () => {
    return (
        <>
            {/* <Aaa/> */}
            <ContactList />
            <Filter />
            <Form/>
        </>
    )
}