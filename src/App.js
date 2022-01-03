import React from 'react';
import './App.css';
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactSaved from './components/ContactSaved';

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

  render() {
    const { editContactButton } = this.state;
    return <div>
      <Header />
      {editContactButton ?
        <div>
          <Contact contact={this.state.contact} handleChange={this.handleContactChange} />
          <button onClick={this.toggleContactButton}>Save</button>
        </div> :
        <div><ContactSaved contact={this.state.contact} />
          <button onClick={this.toggleContactButton}>Edit</button>
        </div>
      }


    </div>
  }
}

export default App;
