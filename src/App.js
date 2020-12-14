import React from 'react'

import './App.css'
import Header from './components/Header'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import Home from './components/Home'

function App() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

export default App
