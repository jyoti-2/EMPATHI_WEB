import React from 'react';
// import logo from "./../../assets/logo.png";
import { Navbar,Nav, InputGroup, FormControl, Button, Form} from 'react-bootstrap';
//import {Link} from 'react-scroll';
import './NavBar.css';

//import { AiOutlineSearch } from 'react-icons/ai';
class NavBar extends React.Component{

    render() {
        return (
            <div className="nav-container">
                    <Navbar fixed="top" bg="white" expand="sm" className="navbar-container" >
                    <div className="nav-left">
                        {/*Logo*/}
                        IdeaStart
                    </div>

                    <InputGroup className="nav-center">
                        <FormControl
                            placeholder="Search by doctor name"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            className= "text-container"
                        />
                                                              
                        <Form.Control as="select" defaultValue="Search by city" className="text-container">
                                    <option>Search by city</option>
                                    <option>Mumbai</option>
                                    <option >Delhi</option>
                                    <option >Patna</option>
                                    <option>Tamil Nadu</option>
                    </Form.Control>
                    <InputGroup.Append>
                    <Button href = "./#/doctors" variant="outline-danger">Get Started</Button>
                    </InputGroup.Append>
                </InputGroup>

                    
                    <div className="nav-right">
                    {/*<Navbar.Toggle aria-controls="responsive-navbar-nav" className='bar' />
                    <Navbar.Collapse id="rsponsive-navbar-nav">
                               
                        <Link activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={1000}>
                        </Link>

                        <Link activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={1000}>
                            <a className='sectionLink'> About us </a> 
                        </Link>
                   
    
                    
                    {/* <Nav.Item>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item> 
                       
                    </Navbar.Collapse> */}
                    <Nav.Link href="./#/login">Login/Signup</Nav.Link>

                        </div>
                </Navbar>
            </div>
            
        );
    };
};

export default NavBar;

