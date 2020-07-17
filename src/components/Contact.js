import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container>
      <section id='contact'>
        <Row md={5} lg={2} className='justify-content-center'>
          <Col>
            <h1 className='text-center'>What's Next?</h1>
            <p className='text-center'>
              I'm currently looking for an opportunity to join a front-end
              development team. Do not hesitate to shoot me an email, I'll try
              my best to get back to you as soon as posible!
            </p>
            <a href='mailto:septynade@gmail.com'>
              <button className='btn-dark d-block mx-auto'>
                Let's Connect!
              </button>
            </a>
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default Contact
