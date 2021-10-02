
import React, {useState} from 'react';
import css from "./App.module.css";
import shortid from 'shortid';
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactsList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import useLocalStorage from './LocalStorage';

const App = () =>{
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState('');

 const addContact = (name, number) => {
    const contact = {
      id: shortid(),
      name,
      number,
    };

    setContacts((contacts) => [contact, ...contacts]);
  };

  const formOnSubmitHandler = ({ name, number }) => {
    if (contacts.find((contact) => contact.name === name)) {
      alert(`'${name}' is already in your list`);
      return;
    }
    if (contacts.find((contact) => contact.number === number)) {
      alert(`'${number}' is already in your list`);
      return;
    }
    addContact(name, number);
    
  };

  const deleteContact = (contId) => {
    setContacts(contacts.filter((contact) => contact.id !== contId));
    
  };
  const changeFilter = (filter) => setFilter(filter.toLowerCase());
  const visibleContacts = () => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter) ||
        contact.number.includes(filter)
    );
  };
     
    return (
     
      <div>
        <div className={css.App}>          
          <h1>Phonebook</h1>

          <ContactForm onSubmit={formOnSubmitHandler} />
          </div>
        <div className={css.contactBox}>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={changeFilter}/>
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
          </div>
        </div>
                     
    );
  }

export default App;