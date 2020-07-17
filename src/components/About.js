import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const About = () => {
  return (
    <Container className='spacer'>
      <Row>
        <Col style={{ marginRight: '2rem' }}>
          <section id='about'>
            <h1 className='section-title'>About Me</h1>
            <p>
              Hello! My name is Ade, I'm an English literature graduate who's
              always been interested in technology, language, culture and
              everything in their orbit.
            </p>
            <p>
              I wrote my first line of code on{' '}
              <a
                href='https://freecodecamp.org'
                target='blank'
                className='link'
              >
                FreeCodeCamp
              </a>{' '}
              on 2016, and about 8 months ago I decided to start learning web
              development seriously, and have been continuously learning via
              courses and other sources. My goal is to be able to build anything
              I want to and asked to, adding more tools and techs to my skill
              set so I can proclaim as a good developer.
            </p>
            <p>Here are a few technolgies that I'm experienced with:</p>
            <ul className='tech-lists'>
              <li className='tech-list'>JavaScript</li>
              <li className='tech-list'>Vue.js</li>
              <li className='tech-list'>Vuex</li>
              <li className='tech-list'>Nuxt.js</li>
              <li className='tech-list'>HTML & CSS</li>
              <li className='tech-list'>React.js</li>
              <li className='tech-list'>Redux</li>
            </ul>
          </section>
        </Col>
        <Col sm='12' md lg='6' xl='6' className='text-center pic'>
          <Image thumbnail width='275px' src='pic.jpg'></Image>
        </Col>
      </Row>
    </Container>
  )
}

export default About
