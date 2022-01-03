import React from 'react';
import './App.css';
import Header from "./components/Header";
import Contact from "./components/Contact";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contact: {
        name: '',
        email: '',
        phone: ''
      }
    }
  }

  handleContactChange = (e) => {
    this.setState({
      contact: {
        ...this.state.contact,
        [e.target.id]: e.target.value
      }
    })
  }

  handleContactSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.contact.name)
    console.log(this.state.contact.email)
    console.log(this.state.contact.phone)
  }

  render() {
    return <div>
      <Header />
      <Contact contact={this.state.contact} handleChange={this.handleContactChange} handleSubmit={this.handleContactSubmit} />
    </div>
  }
}

export default App;
