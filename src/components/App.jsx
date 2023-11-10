import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Phonebook from './phonebook/Phonebook';
import Contacts  from './contacts/Contacts';
import css from './App.module.css';

export const App = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
      setFilter(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const isDuplicate = contacts.some(
      contact => contact.name === name || contact.number === number
    );

    if (isDuplicate) {
      window.alert(
        `Contact with name "${name}" or number "${number}" already exists.`
      );
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    console.log(`Added ${name} - ${number} to your contacts!`);

    setContacts(prevContacts => [...prevContacts, newContact]);
    localStorageUpdate([...contacts, newContact]);
  };

  const handleDelete = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    localStorageUpdate(updatedContacts);
  };

  const localStorageUpdate = updatedContacts => {
    const contactsString = JSON.stringify(updatedContacts);
    localStorage.setItem('phonebookData', contactsString);
  };

  useEffect(() => {
    const storedContacts = localStorage.getItem('phonebookData');
    if (storedContacts) {
      const parsedContacts = JSON.parse(storedContacts);
      setContacts(parsedContacts);
    }
  }, []);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Phonebook</h2>
      <Phonebook
        name={name}
        number={number}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <h2 className={css.title}>Contacts</h2>
      <Contacts
        name={name}
        number={number}
        contacts={contacts}
        filter={filter}
        deleteContacts={handleDelete}
      />
    </div>
  );
};