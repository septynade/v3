import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container fluid className='my-5 py-5' id='contact'>
      <Row md={5} lg={2} className='justify-content-center py-5'>
        <Col>
          {/* <h1 className='text-center section-title'>Let's connect!</h1>
          <p className='text-center text-body'>
          </p> */}
          <a href='mailto:septynade@gmail.com' target='blank'>
            <button className='btn-white d-block mx-auto'>Let's connect →</button>
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
