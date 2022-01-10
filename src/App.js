import React from 'react';
import Contact from './components/Contact';
import Education from './components/Education'
import Work from './components/Work'
import './App.css';

function App() {

  return (
    <div>
      <h2>Welcome!</h2>
      <h3>Enter the details below in order to generate your CV.</h3>
      <Contact />
      <Education />
      <Work />
    </div>
  )
}

export default App;