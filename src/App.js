
import React, { Component } from 'react';
import css from "./App.module.css";
import shortid from 'shortid';
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactsList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";

class App extends Component {
  state = {
  contacts: [],
  filter: '', 
  }

formList = (contact, contacts) =>
    contacts.find(cont =>
      cont.name.toLocaleLowerCase().includes(contact.name.toLocaleLowerCase()),
    );
  formOnSubmitHandler = e => {    
    const { contacts } = this.state;
    console.log({ contacts });
    const contact = {
      id: shortid(),
      name: e.name,
      number: e.number,
    };
    this.formList(contact, contacts)
      ? alert(`${contact.name} is already in your list`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')    
    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }    
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      };
  };
  
  render() {
    const normalizeContacts = this.state.filter.toLocaleLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeContacts),
    );
    const { filter } = this.state;
    return (
     
      <div>
        <div className={css.App}>          
          <h1>Phonebook</h1>

          <ContactForm onSubmit={this.formOnSubmitHandler} />
          </div>
        <div className={css.contactBox}>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter}/>
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
          </div>
        </div>
                     
    );
  }
}

export default App;