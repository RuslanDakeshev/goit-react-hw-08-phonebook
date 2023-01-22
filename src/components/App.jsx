import { Form } from '../components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container, Title, Subtitle } from './App.styled';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm/LoginForm';
import { UserAuthMenu } from './UserAuthMenu/UserAuthMenu';


export const App = () => {
  return (
    <Container>
      <RegisterForm />
      <LoginForm />
      <UserAuthMenu/>
      <Title>Phonebook</Title>
      <Form />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
    </Container>
  );
};

