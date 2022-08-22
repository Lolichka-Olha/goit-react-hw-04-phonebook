import { useState, useMemo, useCallback } from 'react';
import { nanoid } from 'nanoid';
import Container from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import useLocaleStorage from '../Hooks/useLocaleStorage';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useLocaleStorage('contacts', initialState);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    const searchByName = contacts.find(contact =>
      contact.name.toLowerCase().includes(normalizedName)
    );
    if (searchByName) {
      return alert(`${name} is already in contacts.`);
    }

    const searchByNumber = contacts.find(contact =>
      contact.number.includes(number)
    );
    if (searchByNumber) {
      return alert(`${number} is already in contacts.`);
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => [contact, ...prevState]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const visibleContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filter]);

  const deleteContact = useCallback(
    id => {
      setContacts(prevState => prevState.filter(contact => contact.id !== id));
    },
    [setContacts]
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </Container>
  );
};
