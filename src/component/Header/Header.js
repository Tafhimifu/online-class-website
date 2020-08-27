import React from 'react';
import logo from '../../imges/logo.jpg';
import challenge from '../../imges/challenge.jpg';
import { Navbar,Nav,Form,Button } from 'react-bootstrap';
import './Header.css';



const Header = () => {
  
    return (
        <div>
            <div className="logo-header">
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <img className="logo-image" src={logo} alt=""/>
            <p className="container-fluid text-center">Accept Challenges</p>
            </Nav>
            <Form inline>
            <Nav.Link href="#aboutus">About Us</Nav.Link> 
            
              <Button variant="outline-info bg-danger">Sign In</Button>
              </Form>
           </Navbar.Collapse>
             </Navbar>
            </div>
            <div className="main-header">
               <img className="challenge-image"src={ challenge} alt=""/>
               <Nav>
                    
>
             <Nav.Item>
             <Nav.Link href="courses">Courses</Nav.Link>
             </Nav.Item>
             <Nav.Item>
             <Nav.Link href="careers">Careers</Nav.Link>
             </Nav.Item>
            <Nav.Item>
            <Nav.Link href="#mycourses">
              My courses
            </Nav.Link>
            </Nav.Item>
            </Nav>
            </div>
        
        </div>
    );
};

export default Header;