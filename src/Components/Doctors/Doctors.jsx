import React from 'react';
import "./Doctors.css";
import doc from "./../../assets/doc.jpg";
import NavBar from '../NavBar/NavBar';

const Doctors = () => {
    return (
        <div id="doctors" className="doctor-container" >
            <NavBar/>
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
                

                  
            </div>
            

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
                
                </div>
            
        </div>
        

        
        
        
    );
};

export default Doctors;
