import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Form } from '../components/Form/Form';


export const UsersPage = () => {
    return (
        <>
            
            <ContactList />
            <Filter />
            <Form />
            
        </>
    )
}