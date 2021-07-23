import React from 'react'
import './AppointmentCard.css';
import InPerson from "./../../assets/In_person.jpg";
import OnlineCons from "./../../assets/online_cons.jpg";


const Appointment = () => {
    return (
        <div className="appointment-container" id = "Appointment">
            <div className="left-container">
                <h4> Pick a time slot.</h4>
            </div>
            
            <div className="right-container">
            <img
            src={InPerson}
            alt=''
            className="appoint-img"
            />
            <img
            src={OnlineCons}
            alt=''
            className="appoint-img"
            />
            </div>

            
        </div>
    );
};

export default Appointment;