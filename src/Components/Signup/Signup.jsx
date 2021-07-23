import React from 'react';
import './Signup.css';
import signup from './../../assets/signup.png';
import { Form, Button, Col} from 'react-bootstrap';


const Signup = () => {
    return (
        
        <div className="signup-container">
            <div className="signup-header">
                <h1> Sign Up </h1>
            </div>
            <img
                src={signup}
                className='signup-image'
                alt=''
            />

            
            <Form className="input-box">
                
               
                    <Form.Group as={Col} controlId="formGridname" >
                        <Form.Label size="lg"> First name </Form.Label>
                        <Form.Control size="lg" placeholder="First name" className="text-container"/>
                    </Form.Group>
                   
                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label size="lg"> Last name </Form.Label>
                        <Form.Control size="lg" placeholder="Last name" className="text-container" />
                    </Form.Group>
                    
               
               
                <Form.Group controlId="formBasicEmail">
                    <Form.Label size="lg" >Mobile Number</Form.Label>
                    <Form.Control size="lg" type="number" placeholder="Enter Mobile Number" className="text-container"/>
                </Form.Group>
               
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label size="lg" >Email Address</Form.Label>
                    <Form.Control size="lg" type="email" placeholder="name@example.com" className="text-container"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
                   
                <Form.Group controlId="formBasicPassword">
                    <Form.Label size="lg">Password</Form.Label>
                    <Form.Control  size="lg" type="password" id="inputPassword5" aria-describedby="passwordHelpBlock" placeholder="Enter Password" className="text-container"/>
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </Form.Text>
                    </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label size="lg">Confirm Password</Form.Label>
                    <Form.Control size="lg" type="password" className="text-container" />
                </Form.Group>
               
               
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I accept the Terms and Conditions & Privacy Policy" />
                </Form.Group>
            
                
                <div className="submit-button">
                <Button variant="danger" size="lg" type="submit">
                    Sign Up
                    </Button>
                </div>
           
            </Form>
            
        </div>
    );
};

export default Signup;