import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import pp from '../assets/pic.JPG'

const About = () => {
  return (
    <Container className='spacer' id='about'>
      <Row>
        <Col style={{ marginRight: '2rem' }}>
          <h1 className='section-title'>Hello!</h1>
          <p className='mt-2 text-body'>
            My name is Ade, I'm an English literature graduate turned
            dev based in Indonesia.
          </p>
          <p className='text-body'>
            I first dabbled with code on{' '}
            <a
              href='https://freecodecamp.org'
              target='_blank'
              rel='noopener noreferrer'
              className='link'
            >
              <strong>FreeCodeCamp,</strong>
            </a>{' '}
            but only got really into it after a couple years of self-doubts, dozens of podcasts and success stories.
            and in late 2019 I decided to quit my Digital Marketing job to focus
            on learning to code and pursue a dev career. Since then,
            I have been continuously learning the industries' best practices, new techs and stuff.
          </p>
          <p className='text-body'>
            Here are a few technolgies that I'm experienced with:
          </p>
          <ul className='tech-lists'>
            <li className='tech-list'>Swift</li>
            <li className='tech-list'>Objective-C</li>
            <li className='tech-list'>UIKit</li>
            <li className='tech-list'>Core Data</li>
            <li className='tech-list'>JavaScript</li>
            <li className='tech-list'>React</li>
          </ul>
        </Col>
        <Col sm='12' md lg='6' xl='6' className='text-center pp'>
          <Image width='275px' src={pp} className='pic'></Image>
        </Col>
      </Row>
    </Container>
  )
}

export default About
