import React from 'react';
import './App.css';
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactSaved from './components/ContactSaved';
import Education from './components/Education';
import EducationSaved from './components/EducationSaved';
import Work from './components/Work'
import WorkSaved from './components/WorkSaved'

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
        id: Date.now().toString(),
        school: '',
        major: '',
        years: ''
      },
      eduList: [],
      editEdu: true,
      work: {
        company: '',
        position: '',
        tasks: '',
        years: ''
      },
      workList: [],
      editWork: true,
    }
  }

  toggleEditContact = () => {
    this.setState({ editContact: !this.state.editContact })
  }

  toggleEditEdu = () => {
    this.setState({ editEdu: !this.state.editEdu })
  }

  toggleEditWork = () => {
    this.setState({ editWork: !this.state.editWork })
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

  handleWorkChange = (e) => {
    this.setState({
      work: {
        ...this.state.work,
        [e.target.id]: e.target.value
      }
    })
  }

  handleEduSubmit = (e) => {
    e.preventDefault();
    this.setState({
      eduList: this.state.eduList.concat(this.state.edu),
      edu: {
        id: Date.now().toString(),
        school: '',
        major: '',
        years: ''
      },
      editEdu: !this.state.editEdu
    })
  }

  handleWorkSubmit = (e) => {
    e.preventDefault();
    this.setState({
      workList: this.state.workList.concat(this.state.work),
      work: {
        company: '',
        position: '',
        tasks: '',
        years: ''
      },
      editWork: !this.state.editWork
    })
  }

  delEduButton = (id) => {
    this.setState({
      eduList: this.state.eduList.filter(edu => edu.id !== id)
    })
  }

  delWorkButton = (company) => {
    this.setState({
      workList: this.state.workList.filter(work => work.company !== company)
    })
  }

  render() {
    const { contact, editContact, edu, eduList, editEdu, work, workList, editWork } = this.state;
    return <div>
      <Header />

      {/* Contact Information Section */}
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

      {/* Education Section */}
      <div className="section-title">Education</div>
      <EducationSaved eduList={eduList} delButton={this.delEduButton} />
      {editEdu ?
        <Education edu={edu} handleChange={this.handleEduChange} handleSubmit={this.handleEduSubmit} />
        :
        <button onClick={this.toggleEditEdu}>Add</button>
      }

      {/* Professional Experience Section */}
      <div className="section-title">Professional Experience</div>
      <WorkSaved workList={workList} delButton={this.delWorkButton} />
      {editWork ?
        <div>
          <Work work={work} handleChange={this.handleWorkChange} handleSubmit={this.handleWorkSubmit} />
        </div>
        :
        <button onClick={this.toggleEditWork}>Add</button>
      }

    </div >
  }
}

export default App;
