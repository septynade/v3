import React from 'react'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'

// import proj from '../assets/proj.png'
import tindog from '../assets/tindog.png'
import robofriends from '../assets/robofriends.png'
import tokophone from '../assets/tokophone.png'
import slackClone from '../assets/slackClone.png'
import medcord from '../assets/medcord.png'
import resepi from '../assets/resepi.png'
// import proj from '../assets/proj.png'

const Project = () => {
  return (
    <Container fluid style={{ background: '#f1f1f1', padding: '2em 0' }}>
      <Container className='mb-5' id='project'>
        <Row className='justify-content-end'>
          <Col>
            <h1 className='text-center mb-2 section-title'>Some Projects</h1>
            <hr className='mb-5' />
            <Row>
              <Col>
                <CardGroup>
                  <Card className='px-4 pt-3'>
                    <a
                      href='https://septynade.github.io/tindog'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Card.Img
                        variant='top'
                        src={tindog}
                        className='pro-img'
                      />
                    </a>
                    <Card.Body>
                      <Card.Title>
                        Tindog{' '}
                        <a
                          href='https://septynade.github.io/tindog'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fas fa-external-link-alt pro-link ml-3'></i>
                        </a>
                        <a
                          href='https://github.com/septynade/tindog'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fab fa-github pro-link'></i>
                        </a>
                      </Card.Title>

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
                    </Card.Body>
                  </Card>
                  <Card className='px-4 pt-3'>
                    <a
                      href='https://react-devchat.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Card.Img
                        variant='top'
                        src={slackClone}
                        className='pro-img'
                      />
                    </a>
                    <Card.Body>
                      <Card.Title>
                        Slack Clone
                        <a
                          href='https://react-devchat.netlify.app/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fas fa-external-link-alt pro-link ml-3'></i>
                        </a>
                        <a
                          href='https://github.com/septynade/slack-clone'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fab fa-github pro-link'></i>
                        </a>
                      </Card.Title>
                      <Card.Text>
                        A clone of the earlier version of Slack, with similar
                        design and functionality. It lets users to register with
                        their email, join a public chat, add a channel to their
                        favorite, upload image files, change avatar, and send a
                        private message to other users.
                      </Card.Text>
                      <Card.Text>
                        <small className='text-muted'>
                          Built with: React.js, Redux, Semantic UI, Firebase
                        </small>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <CardGroup>
                  <Card className='px-4 pt-3'>
                    <a
                      href='https://tokophone.netlify.app'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Card.Img
                        variant='top'
                        src={tokophone}
                        className='pro-img'
                      />
                    </a>
                    <Card.Body>
                      <Card.Title>
                        Tokophone
                        <a
                          href='https://tokophone.netlify.app'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fas fa-external-link-alt pro-link ml-3'></i>
                        </a>
                        <a
                          href='https://github.com/septynade/tokophone'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fab fa-github pro-link'></i>
                        </a>
                      </Card.Title>
                      <Card.Text>
                        A phone e-commerce site with a functional cart and
                        checkout function, I learned how to implement React's
                        context API and Paypal's sandbox API while building
                        this. It is built with Bootstrap and hosted on Netlify.
                      </Card.Text>
                      <Card.Text>
                        <small className='text-muted'>
                          Built with: React.js, Context, Bootstrap, Styled
                          Components
                        </small>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className='px-4 pt-3'>
                    <a
                      href='https://septynade.github.io/robofriends'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Card.Img
                        variant='top'
                        src={robofriends}
                        className='pro-img'
                      />
                    </a>
                    <Card.Body>
                      <Card.Title>
                        Robofriends
                        <a
                          href='https://septynade.github.io/robofriends'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fas fa-external-link-alt pro-link ml-3'></i>
                        </a>
                        <a
                          href='https://github.com/septynade/robofriends'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fab fa-github pro-link'></i>
                        </a>
                      </Card.Title>
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
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <CardGroup>
                  <Card className='px-4 pt-3'>
                    <a
                      href='https://resepi-c1243.firebaseapp.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Card.Img
                        variant='top'
                        src={resepi}
                        className='pro-img'
                      />
                    </a>
                    <Card.Body>
                      <Card.Title>
                        Resepi
                        <a
                          href='https://resepi-c1243.firebaseapp.com/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fas fa-external-link-alt pro-link ml-3'></i>
                        </a>
                        <a
                          href='https://github.com/septynade/resepi'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fab fa-github pro-link'></i>
                        </a>
                      </Card.Title>
                      <Card.Text>
                        A web app that lets users to store recipes, which saves
                        the data on firebase. Built entirely with Vue.
                      </Card.Text>
                      <Card.Text>
                        <small className='text-muted'>
                          Built with: Vue.js, Vue-Router, Slugify, Firebase
                        </small>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className='px-4 pt-3'>
                    <a
                      href='https://dribbble.com/shots/13988152-Medical-Record-Mobile-App-Concept'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Card.Img
                        variant='top'
                        src={medcord}
                        className='pro-img'
                      />
                    </a>
                    <Card.Body>
                      <Card.Title>
                        Medical Record Mobile App Concept
                        <a
                          href='https://dribbble.com/shots/13988152-Medical-Record-Mobile-App-Concept'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fas fa-external-link-alt pro-link ml-3'></i>
                        </a>
                      </Card.Title>
                      <Card.Text>
                        Having to take care of and keep track of both of my
                        parents' health I find my self needing an app to help
                        me, so I imagined one. This is my first time designing
                        mobile UI.
                      </Card.Text>
                      <Card.Text>
                        <small className='text-muted'>
                          Built with: Adobe XD
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
