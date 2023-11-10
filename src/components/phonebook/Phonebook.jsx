import React from 'react';
import css from './Phonebook.module.css';

const Phonebook = ({ name, number, onChange, onSubmit }) => {
    return (
      <form onSubmit={onSubmit} className={css.form}>
        <div className={css.item}>
          <label className={css.label}>Name:</label>
            <input
              type="text"
              placeholder="Write name..."
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={onChange}
              required
              className={css.input}
            />
        </div>
        <div className={css.item}>
          <label className={css.label}>Number:</label>
          <input
            type="tel"
            placeholder="Write number..."
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={onChange}
            required
            className={css.input}
          />
        </div>
        
        <button type="submit" className={css.add_button}>Add contact</button>
      </form>
    );
  }
  export default Phonebook;