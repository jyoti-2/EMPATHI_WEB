import React from 'react';
// import logo from "./../../assets/logo.png";
import './NavBar.css';
import { Navbar, InputGroup, FormControl, Button, Form} from 'react-bootstrap';
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
                   
                    <Button href = "./#/doctors" variant="outline-danger" size='sm' className="find-doctor">Get Started</Button>
                </InputGroup>

                    <div className="nav-right">
                    
                        <Button href="./#/login"  variant="danger" size="lg">
                            Login/Signup
                        </Button>
                       
                        </div>
           
                </Navbar>
        
            </div>
            
        );
    };
};

export default NavBar;