import React from 'react';
import './App.css';
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactSaved from './components/ContactSaved';
import Education from './components/Education';
import EducationSaved from './components/EducationSaved'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contact: {
        name: '',
        email: '',
        phone: ''
      },
      editContact: true,
      edu: {
        school: '',
        major: '',
        years: ''
      },
      eduList: [],
      editEdu: true,
    }
  }

  toggleEditContact = () => {
    this.setState({ editContact: !this.state.editContact })
  }

  toggleEditEdu = () => {
    this.setState({ editEdu: !this.state.editEdu })
  }

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

  handleEduSubmit = (e) => {
    e.preventDefault();
    this.setState({
      eduList: this.state.eduList.concat(this.state.edu),
      edu: {
        school: '',
        major: '',
        years: ''
      },
      editEdu: !this.state.editEdu
    })
  }

  render() {
    const { editContact, contact, edu, editEdu, eduList } = this.state;
    return <div>
      <Header />
      {editContact ?
        <div>
          <Contact contact={contact} handleChange={this.handleContactChange} />
          <button onClick={this.toggleEditContact}>Save</button>
        </div> :
        <div>
          <ContactSaved contact={contact} />
          <button onClick={this.toggleEditContact}>Edit</button>
        </div>
      }
      {editEdu ?
        <div>
          <div className="section-title">Education</div>
          <EducationSaved eduList={eduList} />
          <Education edu={edu} handleChange={this.handleEduChange} handleSubmit={this.handleEduSubmit} />
        </div> :
        <div>
          <div className="section-title">Education</div>
          <EducationSaved eduList={eduList} />
          <button onClick={this.toggleEditEdu}>Add</button>
        </div>
      }

      {/* <Education edu={edu} handleChange={this.handleEduChange} handleSubmit={this.handleEduSubmit} /> */}
      {/* <EducationSaved eduList={eduList} /> */}
    </div >
  }
}

export default App;
