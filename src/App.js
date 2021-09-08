import React, { Component } from 'react';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
// import ContactList from './components/ContactList';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <div>
          <Container>
            <h1 className="title">Phonebook</h1>
            <ContactForm />

            <h2 className="title">Contacts</h2>
            <Filter />
            {/* <ContactList /> */}
          </Container>
        </div>
      </>
    );
  }
}

export default App;
