import {useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';


export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

 const inputValueForm = e => {
    const { value } = e.target;

    setFilter({ value });
  };



const addContact = (name, number) => {
  if (contacts.some(item => item.name.toLowerCase() === name.toLowerCase())) {
    return alert(`${name} is already in contact`);
  }
  const newContact = {
    id: nanoid(),
    name,
    number,
  };
  setContacts(prevContacts => [...prevContacts, newContact]);
};

const filterContact = e => {
  return contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};
const  removeContact = id => {
  setContacts(prev => prev.filter(el => el.id !== id));
  };
  
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />

        <h2>Contacts</h2>
        <Filter
          inputValueForm={inputValueForm}
          value={filter}
        />
        <ContactList
          filttredContacts={filterContact()}
          removeContact={removeContact}
        />
      </>
    );
};
