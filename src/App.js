import React from "react";
import { useState } from "react";
import useLocalStorage from "./LocalStorage";
import css from "./App.module.css";
import { v4 as uuidv4 } from 'uuid';
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactsList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";

function App (){
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState('');


  const formOnSubmitHandler = (name, number) => {
    const {contacts} = {
      id: uuidv4(),
      name,
      number,
    };
    
    if (contacts.find((contact) => contact.name === name)) {
      
      alert(`${name} is already in your list`
      );
      return;
    }
    if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in your list`
      );
      return;
    }
    
  }
   
   const deleteContact = (contactID) => {
    setContacts(contacts.filter((contact) => contact.id !== contactID));
  };

  const changeFilter = (filter) => setFilter(filter.toLowerCase());
  const visibleContacts = () => {
    return contacts.filter((contact) =>contact.name.toLowerCase().includes(filter) ||contact.number.includes(filter)

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
            contacts={visibleContacts()}
            onDeleteContact={deleteContact}
          />
          </div>
        </div>
                     
     )
  }


export default App;