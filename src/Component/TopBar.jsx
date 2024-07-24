import React from 'react'
import {Button,Form,Nav,Navbar,NavDropdown,Card} from 'react-bootstrap';
import logo from '../Images/CivitLogo.png'
import {Link,useNavigate,Outlet } from "react-router-dom";
import CivitLogo from '../Images/CivitLogo.png'
export default function TopBar() {
  const navigate =  useNavigate()
  function clksubmit() {
   navigate('/');
  };
  return (
    <>
        <Navbar expand="lg"  className="bg-body-tertiary bg-green"  fixed="top"  sticky="top">
        <Navbar.Brand href="#"><img src={logo} className='pl-2' style={{width:"70%",paddingLeft:'15px'}}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
        className="justify-content-end flex-grow-1 pe-3"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='nav-link'>Dashboard</Link>
           
            <NavDropdown title="My Profile" id="basic-nav-dropdown">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={CivitLogo}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </NavDropdown>
            <NavDropdown title="Help" id="basic-nav-dropdown">
            <Link className='nav-link' to='/help'>Help</Link>
            <Link className='nav-link' to='/help1'>customer care</Link>
            </NavDropdown>
            <Link className='nav-link'></Link>
          </Nav>
          
            <Button variant="outline-success p-2" style={{width:'15%'}}  onClick={clksubmit}>Logout</Button>&nbsp; &nbsp;
          
        </Navbar.Collapse>
    
    </Navbar>
    <Outlet />
    <div id="watermark">Designed By Anurag Jain</div>
    </>
  )
}
