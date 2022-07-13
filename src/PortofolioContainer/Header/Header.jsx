import React from 'react'
import { Navbar, Container } from "react-bootstrap";


const Header = () => {
  return (
  <Navbar variant='dark' bg='dark'>
    {/* fixed='top' */}
  <Container fluid>
    <Navbar.Brand href="/">AvramIonel_DEV</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header
