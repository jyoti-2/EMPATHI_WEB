import React from 'react';
import './Profile.css';
import doc from "./../../assets/doc.jpg";
import { Button } from 'react-bootstrap';
//import NavBar from '../NavBar/NavBar';
import ProfileCard from '../ProfileCard/ProfileCard';
import RatingsCard from '../RatingsCard/RatingsCard';
import StoriesCard from '../StoriesCard/StoriesCard';
import AppointmentCard from '../AppointmentCard/AppointmentCard';


class Profile extends React.Component{
    constructor(){
        super();
        this.state={showProfile:true,
                    showRatings:false,
                    showStories:false,
                    showAppointment:false
                };
        this.hideComponent = this.hideComponent.bind(this);
    }
    hideComponent(name) {
        switch (name) {
          case "showProfile":
            this.setState({ showProfile: this.state.showProfile });
            break;
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
        const { showProfile, showRatings, showStories, showAppointment } = this.state;
        return(
        <div id="profile" className="profile-container">
            {/* <NavBar /> */}
            <div className="top-profile">
                <div className="profile">
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

                    <div className="patient-card">
                    <h5> In-person consultation fee: ₹500</h5>
                    <h5> Overall patient rating: <span class="material-icons"> thumb_up</span><h7> 50 votes</h7></h5>
                    </div>
                
            <div className="button-container">
                    <Button href= './#/profile/Appointmentcard' variant="danger" size="sm" className="btn">
                        <div className="submit-text">
                        In-person appointment
                        </div>  
                    </Button>

                    <Button href= './#/profile/Appointmentcard' variant="danger" size="sm" className="btn">
                        <div className="submit-text">
                        Online consultation
                        </div>  
                    </Button>
            </div>
            </div>


             <div className="top-bar">
                <Button onClick={() => this.hideComponent("showProfile")} variant="danger"  className="item"> <div className="submit-text">Profile</div></Button>
                <Button onClick={() => this.hideComponent("showRatings")} variant="danger"  className="item"><div className="submit-text">User Card</div></Button>
                <Button onClick={() => this.hideComponent("showStories")} variant="danger"  className="item"><div className="submit-text">Patient Card</div></Button>
                <Button onClick={() => this.hideComponent("showAppointment")} variant="danger"  className="item"><div className="submit-text">Consulted for symptoms</div></Button>
            </div> 
            <div>
        {showProfile && <ProfileCard />}
        {showRatings && <RatingsCard />}
        {showStories && <StoriesCard />}
        {showAppointment && <AppointmentCard />}      
      </div>
        </div>
    );
    };
};

export default Profile;
