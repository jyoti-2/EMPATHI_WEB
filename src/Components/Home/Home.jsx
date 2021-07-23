import React from 'react';
import HomePage from "./../../assets/HomePage.jpg";
import { Button } from 'react-bootstrap';
import './Home.css';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';

class Home extends React.Component{

   constructor(props) {
         super(props);
            
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
       }
    
       handleChange(event) {
       this.setState({value: event.target.value});
       }
    
       handleSubmit(event) {
         event.preventDefault();
     }
    
    render() {
        return (
            
            <div id="home" className="landing-container" >
                <NavBar/>
                <div className="landing-box">
                    <img
                    src={HomePage}
                    className='landing-image'
                    alt=''
                />
                <div className="landing-header">
                       Find the right doctor.<br/>For the care you deserve.
                </div>
                    
                <div className="landing-para">
                <p> Choose doctors based on patient ratings. Ratings that you can trust. Search by what matters most to you. </p>
                </div>
            </div>
            
            
                <input
                    type='text'
                    placeholder='Search by doctor name'
                    className='search-box'
                    autoComplete='off'
                    
                />

                <div className="city-search-box">
                <form onSubmit={this.handleSubmit} >
                <select onChange={this.handleChange}>
                    <option default>Search by city</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Patna">Patna</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                </select>
                </form>
                </div>
            
                <Button href="./#/doctors"  variant="danger" size="lg" className="submit-button">
                    <div className="submit-text">
                    Get Started
                    </div>  
                </Button>
                <About />
            </div>      
        );
    }
}
export default Home;