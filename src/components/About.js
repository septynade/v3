import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import pp from '../assets/pp.jpg'

const About = () => {
  return (
    <Container className='spacer' id='about'>
      <Row>
        <Col style={{ marginRight: '2rem' }}>
          <h1 className='section-title'>Hello!</h1>
          <p className='mt-2 text-body'>
            My name is Ade Septian, I'm an English literature graduate turned
            coder based in Bogor, Indonesia. I'm a self-taught developer,
            currently pursuing a career as an iOS developer.
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
            and in late 2019 I quit my Digital Marketing job and decided to
            learn to code more seriously and pursue a career in the software
            development world. Since then, I have been continuously learning
            from anyone and any sources I could find.
          </p>
          <p className='text-body'>
            Here are a few technolgies that I'm experienced with:
          </p>
          <ul className='tech-lists'>
            <li className='tech-list'>Swift</li>
            <li className='tech-list'>UIKit</li>
            <li className='tech-list'>Core Data</li>
            <li className='tech-list'>JavaScript</li>
            <li className='tech-list'>HTML & CSS</li>
            <li className='tech-list'>React & Vue</li>
          </ul>
        </Col>
        <Col sm='12' md lg='6' xl='6' className='text-center pic'>
          <Image width='275px' src={pp}></Image>
        </Col>
      </Row>
    </Container>
  )
}

export default About
