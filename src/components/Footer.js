import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container>
      <footer style={{ color: '#9E9E9E' }}>
        <div className='mb-5'>
          <a
            className='mr-4'
            href='https://github.com/septynade'
            target='blank'
          >
            <i className='fab fa-github pro-link'></i>
          </a>
          <a
            className='mr-4'
            href='https://linkedin.com/in/septynade'
            target='blank'
          >
            <i className='fab fa-linkedin-in pro-link'></i>
          </a>
          <a
            className='mr-4'
            href='https://instagram.com/septynade'
            target='blank'
          >
            <i className='fab fa-instagram pro-link'></i>
          </a>
          <a className='' href='https://twitter.com/septynade' target='blank'>
            <i className='fab fa-twitter pro-link'></i>
          </a>
        </div>
        Design & Built by Ade Septian
        <br />© {new Date().getFullYear()}
      </footer>
    </Container>
  )
}

export default Footer
