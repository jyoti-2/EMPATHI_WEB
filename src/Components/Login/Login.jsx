import React from 'react';
import './Login.css';
import login from './../../assets/login.png';
import {Form, Button, Col} from 'react-bootstrap';

const Login = () => {
  return (
    
    <div className="login-container">
      <div className="login-header">
      <h1> Login </h1>
    </div>
      <img
        src={login}
        className='login-image'
        alt=''
      />
    
    
      
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridname">
            <Form.Label size="lg"> First name </Form.Label>
            <Form.Control size="lg" placeholder="First name" className="text-container" />
          </Form.Group>
                    
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label size="lg"> Last name </Form.Label>
            <Form.Control size="lg" placeholder="Last name" className="text-container"/>
          </Form.Group>
                    
        </Form.Row>
                
        <Form.Group controlId="formBasicEmail">
          <Form.Label size="lg" >Mobile Number</Form.Label>
          <Form.Control size="lg" type="number" placeholder="Enter Mobile Number" className="text-container"/>
          <Form.Text className="text-muted">
            We'll send you the OTP on this number for verification purpose.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I accept the Terms and Conditions & Privacy Policy" />
        </Form.Group>

        <div className="submit-button">
        <Button variant="danger" size="lg" type="submit">
          Send OTP
          </Button>
        </div>
      </Form>
      <div className="signup-link">
      <p> Don't have an account? <a href = './#/signup'>Sign Up</a></p>

      </div>
    </div>
  );
};

export default Login;