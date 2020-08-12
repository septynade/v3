import React from 'react'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Container className='home' fluid>
      <Container
        className='my-5'
        style={{ paddingTop: '15vh', paddingBottom: '10vh' }}
      >
        <h5>Hi, my name is</h5>
        <h1 style={{ width: '10%' }}>Ade Septian</h1>
        <p className='text-body mt-4'>
          I'm an <strong>English literature</strong> graduate turned Web
          Developer.
          <br /> I was a Digital Marketer for a brief moment in my life,
          <br /> but then I realized it wasn't the kind of job I want to do for
          the rest of my life,
          <br /> I wanted something more nerdy and technical, and I found web
          development, and <strong>JavaScript</strong> to be quite fun!
        </p>
        <a
          href='https://drive.google.com/file/d/1-F7fTQRqqa9NlVaJAE6upAG_rKysf9t7/view'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='btn-dark'>Resume</button>
        </a>
        <a
          href='mailto:septynade@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='link'
        >
          <button className='btn-dark'>Get In Touch</button>
        </a>
      </Container>
    </Container>
  )
}

export default Home
