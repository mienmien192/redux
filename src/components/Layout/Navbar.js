import React from 'react'

import {Container, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">The Harley House</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href=""><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href=""><Link to="/calculator">Calculator</Link></Nav.Link>
            
            
            <Nav.Link href=""><Link to="/reducer">Reducer</Link></Nav.Link>
            <Nav.Link href=""><Link to="/redux">Redux</Link></Nav.Link>
            <Nav.Link href=""><Link to="/count">Count</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Header
