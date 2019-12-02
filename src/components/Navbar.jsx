import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
const NavBar = ()=>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="Data" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Small Business</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Large Business</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav >
            <Nav.Link href="/login">Login/Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar