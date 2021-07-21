import React from 'react';
import './Profile.css';
//import { Link } from "react-scroll";
import doc from "./../../assets/doc.jpg";
import { Button } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import ProfileCard from '../ProfileCard/ProfileCard';
import RatingsCard from '../RatingsCard/RatingsCard';
import StoriesCard from '../StoriesCard/StoriesCard';
import AppointmentCard from '../AppointmentCard/AppointmentCard';


const Profile = () => {
    return (
        <div id="profile" className="profile-container">
            <NavBar />
            <div className="first-container-doc">
                <div className="doc-profile">
                    <div className="left-container">
                        <img
                            src={doc}
                            alt=''
                            className='doc-img'
                            href='./#/profile'
                        />
                        {/* <span class="material-icons"> thumb_up_off_alt thumb_down_off_alt </span> */}
                    </div>
                    
                    <div className="right-container">
                        <h3> Dr Amola Kumari, M.D</h3><br/>
                        <h5>Orthopaedic surgeon | 12 Yrs Exp.</h5>
                        <h5> <b>Practice Area:</b>Ankle sprain, Foot pain</h5>
                        <h5> <span class="material-icons"> location_on </span> Old Palasia, Indore | Paras Hospital</h5>
                        <h5> <span class="material-icons">phone </span> +91 9234123457</h5>
                        </div>
                    </div>
                

                    <div className="button-container">
                    <Button href= './#/profile/Appointmentcard'  variant="danger" size="sm" className="submit-button-doc">
                        <div className="submit-text">
                        In-person appointment
                        </div>  
                    </Button>

                    <Button href= './#/profile/Appointmentcard' variant="danger" size="sm" className="submit-button-doc">
                        <div className="submit-text">
                        Online consultation
                        </div>  
                    </Button>
            </div>
            </div>


            <div className="top-bar">
                <h4 className= 'item' href = "./#/Profile/ProfileCard"> Profile</h4>
                <h4 className= 'item' href = "./#/Profile/RatingsCard"> User Card</h4>
                <h4 className= 'item' href = "./#/Profile/StoriesCard"> Patient Card</h4>
                <h4 className= 'item' href ="./#/Profile/Appointmentcard"> Consulted for symptoms</h4>
            </div>

            <ProfileCard/>

            {/* <Link activeClass="active"
                            to="profile"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={1000}>
            </Link>
            <Link activeClass="active"
                            to="Card"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={1000}>
            </Link>
            <Link activeClass="active"
                            to="Card"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={1000}>
            </Link>
            <Link activeClass="active"
                            to="symptoms"
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={1000}>
            </Link> */}      
           
            
        </div>
        
    );
};

export default Profile;
