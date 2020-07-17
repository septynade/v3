import React from 'react'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'

import proj from '../assets/proj.png'

const Project = () => {
  return (
    <Container className='spacer'>
      <Row className='justify-content-end'>
        <Col>
          <section id='project'>
            <h1 className='text-right mb-5'>Some Things I've Built</h1>
            <Row>
              <Col>
                <CardGroup>
                  <Card className='px-4'>
                    <a href='https://septynade.github.io/tindog' target='blank'>
                      <Card.Img variant='top' src={proj} />
                    </a>
                    <Card.Body>
                      <Card.Title>Project1</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Molestiae, provident?
                      </Card.Text>
                      <a
                        href='https://github.com/'
                        target='blank'
                        className='mr-3'
                      >
                        <i className='fab fa-github pro-link'></i>
                      </a>
                      <a href='https://' target='blank'>
                        <i className='fas fa-external-link-alt pro-link'></i>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card className='px-4'>
                    <a href='https://septynade.github.io/tindog' target='blank'>
                      <Card.Img variant='top' src={proj} />
                    </a>
                    <Card.Body>
                      <Card.Title>Project2</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Molestiae, provident?
                      </Card.Text>
                      <a
                        href='https://github.com/'
                        target='blank'
                        className='mr-3'
                      >
                        <i className='fab fa-github pro-link'></i>
                      </a>
                      <a href='https://' target='blank'>
                        <i className='fas fa-external-link-alt pro-link'></i>
                      </a>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <CardGroup>
                  <Card className='px-4'>
                    <a href='https://septynade.github.io/tindog' target='blank'>
                      <Card.Img variant='top' src={proj} />
                    </a>
                    <Card.Body>
                      <Card.Title>Project3</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Molestiae, provident?
                      </Card.Text>
                      <a
                        href='https://github.com/'
                        target='blank'
                        className='mr-3'
                      >
                        <i className='fab fa-github pro-link'></i>
                      </a>
                      <a href='https://' target='blank'>
                        <i className='fas fa-external-link-alt pro-link'></i>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card className='px-4'>
                    <a href='https://septynade.github.io/tindog' target='blank'>
                      <Card.Img variant='top' src={proj} />
                    </a>
                    <Card.Body>
                      <Card.Title>Project4</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Molestiae, provident?
                      </Card.Text>
                      <a
                        href='https://github.com/'
                        target='blank'
                        className='mr-3'
                      >
                        <i className='fab fa-github pro-link'></i>
                      </a>
                      <a href='https://septynade.github.io/' target='blank'>
                        <i className='fas fa-external-link-alt pro-link'></i>
                      </a>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </Container>
  )
}

export default Project
