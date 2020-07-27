import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const About = () => {
  return (
    <Container className='spacer' id='about'>
      <Row>
        <Col style={{ marginRight: '2rem' }}>
          <section>
            <h1 className='section-title'>
              About Me
              <div className='rectangle-1'></div>
            </h1>
            <p className='mt-5 text-body'>
              Hello! My name is Ade Septian, I'm an English literature graduate
              who's always been fond of technology, language, culture and
              everything in their orbit.
            </p>
            <p className='text-body'>
              I first dabbled with code on{' '}
              <a
                href='https://freecodecamp.org'
                target='_blank'
                rel='noopener noreferrer'
                className='link'
              >
                <strong>FreeCodeCamp</strong>
              </a>{' '}
              in 2016, and in the middle of 2019 after reading and listening to
              just a "few" success stories, I was convinced that I could become
              a professional developer. Since then, I have been continuously
              learning via courses and any other sources I could access, with a
              goal in mind; to become a reliable developer.
            </p>
            <p className='text-body'>
              Here are a few technolgies that I'm experienced with:
            </p>
            <ul className='tech-lists'>
              <li className='tech-list'>JavaScript</li>
              <li className='tech-list'>React.js</li>
              <li className='tech-list'>Redux</li>
              <li className='tech-list'>HTML & CSS</li>
              <li className='tech-list'>Vue.js</li>
              <li className='tech-list'>Nuxt.js</li>
            </ul>
          </section>
        </Col>
        <Col sm='12' md lg='6' xl='6' className='text-center pic'>
          <Image width='275px' src='pic.jpg'></Image>
        </Col>
      </Row>
    </Container>
  )
}

export default About
