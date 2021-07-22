import React from 'react'
import './AppointmentCard.css';
import InPerson from "./../../assets/In_person.jpg";
import OnlineCons from "./../../assets/online_cons.jpg";


const Appointment = () => {
    return (
        <div className="appointment-container" id = "Appointment">
            <h1> Patient Appointment</h1>
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
    );
};

export default Appointment;