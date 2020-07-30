import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container
      fluid
      className='border-top border-bottom border-grey mb-0'
      id='contact'
    >
      <Row md={5} lg={2} className='justify-content-center py-5'>
        <Col>
          <h1 className='text-center section-title-black'>What's Next?</h1>
          <p className='text-center text-body'>
            I'm currently looking for an opportunity where I can put my
            abilities to work and to keep growing and learning new things. Do
            not hesitate to shoot me an email, I'll try my best to get back to
            you as soon as posible!
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
