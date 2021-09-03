import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap'
import { LinkContainer} from 'react-router-bootstrap'



function Header() {

 
    return (
        <header>
           <Navbar bg="light" expand="lg">
             <Container>
               <LinkContainer to= '/'>
                <Navbar.Brand>Go2F</Navbar.Brand>
              </LinkContainer>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav className="ml-auto">
    <LinkContainer to= '/about'>
      <Nav.Link>About</Nav.Link>
      </LinkContainer>
      <NavDropdown title="Resources" id="navbarScrollingDropdown">
        <LinkContainer to= '/dashboard'><NavDropdown.Item ><i className="fas fa-home p-1"></i>Home</NavDropdown.Item></LinkContainer>
        <LinkContainer to= '/toolsandservices'><NavDropdown.Item ><i className="fas fa-lightbulb p-1"></i>Tools and services</NavDropdown.Item></LinkContainer>
        <LinkContainer to= '/templates'><NavDropdown.Item><i className="fas fa-file p-1"></i>Templates</NavDropdown.Item></LinkContainer>
        <LinkContainer to= '/articles'><NavDropdown.Item><i className="fas fa-book-open p-1"></i>Articles</NavDropdown.Item></LinkContainer>
        <LinkContainer to= '/community'><NavDropdown.Item disabled ><i className="fas fa-user-friends p-1"></i>Community</NavDropdown.Item></LinkContainer>
        <LinkContainer to= '/events'><NavDropdown.Item disabled ><i className="fas fa-calendar p-1"></i>Events</NavDropdown.Item></LinkContainer>
        <LinkContainer to= '/exclusivecontent'><NavDropdown.Item disabled ><i className="fas fa-medal p-1"></i>Exclusive content</NavDropdown.Item></LinkContainer>
      </NavDropdown>
     
      <LinkContainer to= '/pricing'><Nav.Link >Pricing</Nav.Link></LinkContainer>
      <LinkContainer to= '/signin'><Nav.Link >Sign in</Nav.Link></LinkContainer>
      
    </Nav>
    
      <Button className='btn'>Sign up</Button>
    
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
