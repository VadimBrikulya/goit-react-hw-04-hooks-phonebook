
import React, {useState} from 'react';
import css from "./App.module.css";
import shortid from 'shortid';
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactsList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import useLocalStorage from './LocalStorage';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', 
  [] );  
  const [filter, setFilter] = useState('');



   const  formOnSubmitHandler = ({ name,number}) => {
     contacts.find(contact =>
       contact.name?.toLowerCase().includes(name?.toLowerCase())
         ? alert(`${contact.name}  already exist`)
         :addContact(name,number)
       
     )};


  const addContact = ( name, number ) => {
    
    const contact = {
      id: shortid.generate(),
      name,
      number,
    }
    console.log(contact)
    setContacts(contacts=>[contact, ...contacts])
  }
     
     
   const deleteContact = contactId => {
        setContacts(contacts.filter(contact => contact.id !== contactId)
    )
}
     
     
    
   const changeFilter = filter => setFilter(filter.toLowerCase());
 
 const  visibleContacts = () => {
        return contacts.filter(contact => contact.name?.toLowerCase().includes(filter));
 }
     
    return (
     
      <div>
        <div className={css.App} >          
          <h1>Phonebook</h1>

          <ContactForm onSubmit={formOnSubmitHandler} />
          </div>
        <div className={css.contactBox}>
          <h2>Contacts</h2>
          <Filter  value={filter} onChange={changeFilter}/>
          <ContactsList 
            contacts={visibleContacts()}
            onDeleteContact={deleteContact}
          />
          </div>
        </div>
                     
    );
  }

export default App;