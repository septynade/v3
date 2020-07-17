import React from 'react'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Container className='spacer'>
      <h1 className='greeting'>Hi, I'm Ade.</h1>
      <h2 style={{ fontSize: '1.2rem' }}>
        I'm an <strong>English literature</strong> graduate turned Front-End
        Developer.
        <br /> I was a Digital Marketer for a brief moment in my life,
        <br /> but then I found myself wanting something more technical.
        <br />
        And I found web development to be quite fun and games, that is until I
        met <strong>JavaScript.</strong>
      </h2>
      <a
        href='https://drive.google.com/file/d/1-F7fTQRqqa9NlVaJAE6upAG_rKysf9t7/view'
        target='blank'
      >
        <button className='btn-white'>Resume</button>
      </a>
      <a href='mailto:septynade@gmail.com'>
        <button className='btn-dark'>Get In Touch</button>
      </a>
    </Container>
  )
}

export default Home
