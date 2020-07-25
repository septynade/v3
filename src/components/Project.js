import React from 'react'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'

import proj from '../assets/proj.png'
import tindog from '../assets/tindog.png'
import robofriends from '../assets/robofriends.png'
import tokophone from '../assets/tokophone.png'

const Project = () => {
  return (
    <Container className='spacer'>
      <Row className='justify-content-end'>
        <Col>
          <section id='project'>
            <h1 className='text-right mb-5 section-title'>
              Some Things I've Built
              <div className='rectangle-2'></div>
            </h1>
            <Row>
              <Col>
                <CardGroup>
                  <Card className='px-4 pt-3'>
                    <a href='https://septynade.github.io/tindog' target='blank'>
                      <Card.Img
                        variant='top'
                        src={tindog}
                        className='pro-img'
                      />
                    </a>
                    <Card.Body>
                      <Card.Title>Tindog</Card.Title>
                      <Card.Text>
                        A landing page of an imaginary Tinder clone app for dogs
                        because dogs need some romace in their life too! My
                        introduction to CSS framework, Bootstrap specifically.
                        It relies heavily on Bootstrap's classes, and hosted on
                        Github.
                      </Card.Text>
                      <Card.Text>
                        <small className='text-muted'>
                          Built with: jQuery, JavaScript, HTML, CSS, Bootstrap,
                          Github
                        </small>
                      </Card.Text>
                      <a
                        href='https://github.com/septynade/tindog'
                        target='blank'
                        className='mr-3'
                      >
                        <i className='fab fa-github pro-link'></i>
                      </a>
                      <a
                        href='https://septynade.github.io/tindog'
                        target='blank'
                      >
                        <i className='fas fa-external-link-alt pro-link'></i>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card className='px-4 pt-3'>
                    <a
                      href='https://septynade.github.io/robofriends'
                      target='blank'
                    >
                      <Card.Img
                        variant='top'
                        src={robofriends}
                        className='pro-img'
                      />
                    </a>
                    <Card.Body>
                      <Card.Title>Robofriends</Card.Title>
                      <Card.Text>
                        My first React-Redux app, I learned the basic of React,
                        fetching APIs, local and global state management while
                        building this app. The app basically shows a list of
                        users fetched from a public API and generates their
                        avatar that are generated from another public API.
                      </Card.Text>
                      <Card.Text>
                        <small className='text-muted'>
                          Built with: React.js, Redux, HTML, CSS, Github
                        </small>
                      </Card.Text>
                      <a
                        href='https://github.com/septynade/robofriends'
                        target='blank'
                        className='mr-3'
                      >
                        <i className='fab fa-github pro-link'></i>
                      </a>
                      <a
                        href='https://septynade.github.io/robofriends'
                        target='blank'
                      >
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
                  <Card className='px-4 pt-3'>
                    <a href='https://tokophone.netlify.app' target='blank'>
                      <Card.Img
                        variant='top'
                        src={tokophone}
                        className='pro-img'
                      />
                    </a>
                    <Card.Body>
                      <Card.Title>Tokophone</Card.Title>
                      <Card.Text>
                        A phone e-commerce site with a functional cart and
                        checkout function, I learned how to implement React's
                        context API and Paypal's sandbox API while building
                        this. It is built with Bootstrap and hosted on Netlify.
                      </Card.Text>
                      <Card.Text>
                        <small className='text-muted'>
                          Built with: React.js, Context, Bootstrap, Styled
                          Components, Netlify
                        </small>
                      </Card.Text>
                      <a
                        href='https://github.com/septynade/tokophone'
                        target='blank'
                        className='mr-3'
                      >
                        <i className='fab fa-github pro-link'></i>
                      </a>
                      <a href='https://tokophone.netlify.app' target='blank'>
                        <i className='fas fa-external-link-alt pro-link'></i>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card className='px-4 pt-3'>
                    <a href='/' target='blank'>
                      <Card.Img variant='top' src={proj} className='pro-img' />
                    </a>
                    <Card.Body>
                      <Card.Title>Slack Clone</Card.Title>
                      <Card.Text>
                        An on-going project from a Udemy course I'm currently
                        doing, and that probably shouldn't be listed here. But
                        because I can't wait to start applying for jobs, so I
                        listed it here.
                      </Card.Text>
                      <Card.Text>
                        <small className='text-muted'>
                          Built with: React.js, Redux, Semantic UI, Firebase
                        </small>
                      </Card.Text>
                      <a
                        href='https://github.com/septynade/slack-clone'
                        target='blank'
                        className='mr-3'
                      >
                        <i className='fab fa-github pro-link'></i>
                      </a>
                      <a
                        href='https://react-devchat.netlify.app/'
                        target='blank'
                      >
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
