import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.box}>
            <p>
              {name}:{number}
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        )
      })}
    </ul>
  );
};



ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;




