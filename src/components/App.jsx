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

const addContact = ({ name, number }) => {
    if (
      contacts.some(contact => {
        return contact.name === name || contact.number === number;
      })
    ) {
      return alert(`${name} is already in contacts`);
    }
    setContacts(prev => [...prev, { name, number, id: nanoid() }]);
  };

const  filterContact = () => {
    if (filter.length === 0) return contacts;
    const filttredContacts = contacts.filter(el =>
      el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    return filttredContacts;
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
