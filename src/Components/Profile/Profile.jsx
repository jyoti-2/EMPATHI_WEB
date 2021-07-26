import React from 'react';
import './Profile.css';
import doc from "./../../assets/doc.jpg";
import { Button } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import ProfileCard from '../ProfileCard/ProfileCard';
import RatingsCard from '../RatingsCard/RatingsCard';
import StoriesCard from '../StoriesCard/StoriesCard';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
class Profile extends React.Component{
    constructor(){
        super();
        this.state={
                    showRatings:false,
                    showStories:false,
                    showAppointment:false
                };
        this.hideComponent = this.hideComponent.bind(this);
    }
    hideComponent(name) {
        switch (name) {
         
          case "showRatings":
            this.setState({ showRatings: !this.state.showRatings });
            break;
          case "showStories":
            this.setState({ showStories: !this.state.showStories });
            break;
          case "showAppointment":
                this.setState({ showAppointment: !this.state.showAppointment });
                break;
          default:
            <ProfileCard/>
        }
      }

      

    render() {
        const {  showRatings, showStories, showAppointment } = this.state;
 
        return(
        <div id="profile" className="profile-container">
           <NavBar />
            <div className="top-profile">
                    <div className="top-icons">
                    <span class="material-icons">file_download</span>
                    <span class="material-icons">favorite_border</span>
                    </div>

                    <div className="img-container">
                        <img
                            src={doc}
                            alt=''
                            className='img-cont'
                        />
                        <Button onClick={() => this.hideComponent("showAppointment")} variant="danger" size="sm" className="btns">
                        <div className="submit-text">Write a Review</div>  
                        </Button>
                    </div>

                    <div className="center-container">
                        <h4> Dr Amola Kumari, M.D</h4>
                        <p>Orthopaedic surgeon | 12 Yrs Exp.</p>
                        <p> <b>Practice Area:</b> Ankle sprain, Foot pain</p>
                        <div className="icon"><span class="material-icons"> location_on </span> <p> Old Palasia, Indore | Paras Hospital</p></div>
                        <div className="icon"><span class="material-icons">phone </span><p> +91 9234123457</p></div>
                    </div>

                    <div className="desc">
                    <p>Dr. Amola Kumar is an Orthopedics and Joint replacement Surgeon in Indore having more than 10 years of experience in the field of Orthopaedic surgery. She completed his Six years of Orthopaedic training from prestigious All India Institute of Medical Sciences (AIIMS), New Delhi . Dr. Kumar specializes in Knee & Hip Replacement, Computer navigated TKR, Arthroscopic Knee surgery & Complex Fractures. He has experience of performing more than 2000 knee replacement till date</p>
                    </div>
            </div>

                <div className="top-bar">
               
                <Button onClick={() => this.hideComponent("showRatings")} variant="danger"  className="item"><div className="submit-text">Patient Ratings</div></Button>
                <Button onClick={() => this.hideComponent("showStories")} variant="danger"  className="item"><div className="submit-text">Patient Reviews</div></Button>
                <Button onClick={() => this.hideComponent("showAppointment")} variant="danger"  className="item"><div className="submit-text">Book an appointment</div></Button>
            </div> 
            <div>
        
       
        {showRatings && <RatingsCard />}
        {showStories && <StoriesCard />}
        {showAppointment && <AppointmentCard />}      
      </div>
        </div>
       );
    };
};

export default Profile;
