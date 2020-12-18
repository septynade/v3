import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container fluid className='my-5 py-5' id='contact'>
      <Row md={5} lg={2} className='justify-content-center py-5'>
        <Col>
          <h1 className='text-center section-title'>Let's connect!</h1>
          <p className='text-center text-body'>
            I'm currently looking to join a team where I can put my abilities to
            work, keep growing and learning new things.
            <br /> Do not hesitate to shoot me an email, I'll try my best to get
            back to you as soon as possible!
          </p>
          <a href='mailto:septynade@gmail.com' target='blank'>
            <button className='btn-white d-block mx-auto'>Email Me →</button>
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
