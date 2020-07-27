import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
    }
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state

    const currentScrollPos = window.pageYOffset
    const visible = prevScrollpos > currentScrollPos

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <Navbar
        bg='white'
        expand='lg'
        style={{ zIndex: '2' }}
        className={
          ('navbar',
          {
            'navbar--hidden': !this.state.visible,
          })
        }
      >
        <Container>
          <Navbar.Brand href='/' style={{ fontSize: '2rem' }} className='mr-5'>
            &lt;Ade /&gt;
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto mr-5'>
              <Nav.Link className='mr-5' href='#about'>
                About
              </Nav.Link>
              <Nav.Link className='mr-5' href='#project'>
                Project
              </Nav.Link>
              <Nav.Link className='mr-5' href='#contact'>
                Contact
              </Nav.Link>
            </Nav>
            <Nav className='ml-auto d-none d-lg-flex'>
              <Nav.Link
                className='mr-4'
                href='https://github.com/septynade'
                target='blank'
              >
                <i className='fab fa-github'></i>
              </Nav.Link>
              <Nav.Link
                className='mr-4'
                href='https://linkedin.com/in/septynade'
                target='blank'
              >
                <i className='fab fa-linkedin-in'></i>
              </Nav.Link>
              <Nav.Link
                className='mr-4'
                href='https://instagram.com/septynade'
                target='blank'
              >
                <i className='fab fa-instagram'></i>
              </Nav.Link>
              <Nav.Link
                className='mr-0 pr-0'
                href='https://twitter.com/septynade'
                target='blank'
              >
                <i className='fab fa-twitter'></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Menu
