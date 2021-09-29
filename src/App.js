
import { useState } from "react";
import css from "./App.module.css";
import { v4 as uuidv4 } from 'uuid';
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactsList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";

const App = () =>{
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

    const formOnSubmitHandler = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in your list`);
      return;
    }
    
      const contact = {
      id: uuidv4(),
      name,
      number,
    };
  setContacts(prevState => [...prevState, contact]);
    };
  
  
   const deleteContact = contactID => {
    setContacts(contacts.filter(({ id }) => id !== contactID));
  };

  const changeFilter = filter => {
    setFilter(filter);
  };

const getVisibleContacts = () => {
  return contacts.filter(contact =>contact.name.toLowerCase().includes(filter)
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
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
          />
          </div>
        </div>
                     
     )
  }


export default App;