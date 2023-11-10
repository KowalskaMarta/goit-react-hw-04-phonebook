import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from './Contacts.module.css';

const Contacts = ({ contacts, deleteContacts }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const [filteredContacts, setFilteredContacts] = useState(contacts);

  useEffect(() => {
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [contacts, filter]);

  return (
    <div className={css.contacts}>
      <input
        type="text"
        placeholder="Search contacts..."
        value={filter}
        onChange={handleFilterChange}
        className={css.input}
      />
      <ul className={css.cards}>
        {filteredContacts.map((contact) => (
          <li key={nanoid()} className={css.card}>
            <p className={css.name}>{contact.name}</p>
            <p className={css.number}>{contact.number}</p>
            <div>
              <button
                type="button"
                className={css.button}
                onClick={() => deleteContacts(contact.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
