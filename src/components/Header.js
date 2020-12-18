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
        bg='dark'
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
          <Navbar.Brand href='/' className='mr-5'>
            septynade
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            className='navbar-dark'
          />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link className='mr-3' href='#about'>
                about.
              </Nav.Link>
              <Nav.Link className='mr-3' href='#project'>
                project.
              </Nav.Link>
              <Nav.Link className='mr-3' href='#contact'>
                contact.
              </Nav.Link>
              <Nav.Link
                href='https://drive.google.com/file/d/1-F7fTQRqqa9NlVaJAE6upAG_rKysf9t7/view?usp=sharing'
                target='_blank'
              >
                resume.
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Menu
