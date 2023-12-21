import React from 'react'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'

import spurr from '../assets/spurr.png'
import m2u from '../assets/m2u.jpg'


const Project = () => {
  return (
    <Container fluid style={{ background: '#121212', padding: '2em 0' }}>
      <Container className='mb-5' id='project'>
        <Row className='justify-content-end'>
          <Col>
            <h1 className='text-center mb-2 section-title'>Projects I've worked on</h1>
            <hr className='mb-5' />
            <Row>
              <Col>
                <CardGroup className='mb-1'>
                  <Card className='px-4 pt-3'>
                    <a
                      href='https://www.maybank.co.id/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Card.Img
                        variant='top'
                        src={m2u}
                        className='pro-img'
                      />
                    </a>
                    <Card.Body>
                      <Card.Title>
                        M2U Indonesia
                        <a
                          href='https://www.maybank.co.id/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fas fa-external-link-alt pro-link ml-3'></i>
                        </a>
                      </Card.Title>
                      <Card.Text>
                      A banking app.
                      </Card.Text>
                      <Card.Text>
                        <small className='text-muted'>
                          Built with: Swift, Objective-C, MVVM, UIKit
                        </small>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className='px-4 pt-3'>
                    <a
                      href='https://gospurr.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Card.Img
                        variant='top'
                        src={spurr}
                        className='pro-img'
                      />
                    </a>
                    <Card.Body>
                      <Card.Title>
                        Spurr
                        <a
                          href='https://gospurr.com'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fas fa-external-link-alt pro-link ml-3'></i>
                        </a>
                      </Card.Title>
                      <Card.Text>
                      A simple yet powerful customer loyalty solution suitable for all brick-and-mortar retail and services.
                      </Card.Text>
                      <Card.Text>
                        <small className='text-muted'>
                          Built with: Swift, MVVM, UIKit
                        </small>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Project
