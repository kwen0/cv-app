import React from 'react';
import './App.css';
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactSaved from './components/ContactSaved';
import Education from './components/Education';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contact: {
        name: '',
        email: '',
        phone: ''
      },
      editContactButton: true,
      edu: {
        school: '',
        major: '',
        years: ''
      }
    }
  }

  toggleContactButton = () => {
    this.setState({ editContactButton: !this.state.editContactButton });
  };

  handleContactChange = (e) => {
    this.setState({
      contact: {
        ...this.state.contact,
        [e.target.id]: e.target.value
      }
    })
  }
  handleEduChange = (e) => {
    this.setState({
      edu: {
        ...this.state.edu,
        [e.target.id]: e.target.value
      }
    })
  }

  render() {
    const { editContactButton, contact, edu } = this.state;
    return <div>
      <Header />
      {editContactButton ?
        <div>
          <Contact contact={contact} handleChange={this.handleContactChange} />
          <button onClick={this.toggleContactButton}>Save</button>
        </div> :
        <div><ContactSaved contact={contact} />
          <button onClick={this.toggleContactButton}>Edit</button>
        </div>
      }
      <Education edu={edu} handleChange={this.handleEduChange} />

    </div>
  }
}

export default App;
