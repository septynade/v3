import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container fluid style={{ backgroundColor: '#000' }}>
      <footer style={{ color: '#505050' }} className='mb-0 mt-5 py-3'>
        <div className='my-5'>
          <a
            className='mr-4'
            href='https://github.com/septynade'
            target='blank'
          >
            <i className='fab fa-github icons'></i>
          </a>
          <a
            className='mr-4'
            href='https://linkedin.com/in/septynade'
            target='blank'
          >
            <i className='fab fa-linkedin-in icons'></i>
          </a>
          <a
            className='mr-4'
            href='https://instagram.com/septynade'
            target='blank'
          >
            <i className='fab fa-instagram icons'></i>
          </a>
          <a className='' href='https://twitter.com/septynade' target='blank'>
            <i className='fab fa-twitter icons'></i>
          </a>
        </div>
        © {new Date().getFullYear()} Ade Septian.
      </footer>
    </Container>
  )
}

export default Footer
