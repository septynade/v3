import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container fluid>
      <hr className='footer' />
      <Row>
        <Col className='my-5 pl-5'>© Ade Septian.</Col>
        <Col className='text-right my-5 pr-5'>
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
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
