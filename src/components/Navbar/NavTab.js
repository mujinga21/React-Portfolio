import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function About() {
  
  return (
<div>
<Navbar 
fixed='top'
variant='dark'
expand ='md'
className='animate-navbar nav-theme justify-content-between'>
  {/* <div>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  </div> */}
  <div>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#project">Projects</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
  </div>
 
  

  );
}

export default Navbar;
