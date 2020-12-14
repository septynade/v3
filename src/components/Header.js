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
            <Nav className='ml-auto'>
              <Nav.Link className='mr-5' href='#about'>
                About
              </Nav.Link>
              <Nav.Link className='mr-5' href='#project'>
                Project
              </Nav.Link>
              <Nav.Link className='mr-5' href='#contact' target='_blank'>
                Contact
              </Nav.Link>
              <Nav.Link href='https://drive.google.com/file/d/1-F7fTQRqqa9NlVaJAE6upAG_rKysf9t7/view?usp=sharing'>
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Menu
