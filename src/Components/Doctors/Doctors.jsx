import React from 'react';
import "./Doctors.css";
import doc from "./../../assets/doc.jpg";
//import NavBar from '../NavBar/NavBar';

const Doctors = () => {
    return (
        <div id="doctors" className="doctor-container" >
            
            {/* <NavBar/> */}
                <div className="first-container-doc">
                <a href = './#/profile' class='clickable'>

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
                        <h2> Dr Amola Kumari, M.D</h2><br/>
                        <h6>Orthopaedic surgeon | 12 Yrs Exp.</h6>
                        <h6> <b>Practice Area:</b> Ankle sprain, Foot pain</h6>
                        <h6> <span class="material-icons"> location_on </span> Old Palasia, Indore | Paras Hospital</h6>
                        <h6> <span class="material-icons">phone </span> +91 9234123457</h6>
                        <h6> In-person consultation fee: ₹500</h6>
                        <h6> Overall patient rating: <span class="material-icons"> thumb_up</span><h7> 50 votes</h7></h6>
                        </div>
                    </div>  
                    </a>
             </div>
            
            



            <div className="first-container-doc">
            <a href = './#/profile' class='clickable'>

                <div className="doc-profile">
                    <div className="left-container">
                        <img
                            src={doc}
                            alt=''
                            className='doc-img'
                        />
                        {/* <span class="material-icons"> thumb_up_off_alt thumb_down_off_alt </span> */}
                    </div>
                    
                    <div className="right-container">
                        <h2> Dr Amola Kumari, M.D</h2><br/>
                        <h6>Orthopaedic surgeon | 12 Yrs Exp.</h6>
                        <h6> <b>Practice Area:</b> Ankle sprain, Foot pain</h6>
                        <h6> <span class="material-icons"> location_on </span> Old Palasia, Indore | Paras Hospital</h6>
                        <h6> <span class="material-icons">phone </span> +91 9234123457</h6>
                        <h6> In-person consultation fee: ₹500</h6>
                        <h6> Overall patient rating: <span class="material-icons"> thumb_up</span><h7> 50 votes</h7></h6>
                        </div>
                    </div>
                    </a>
                </div>
               


                

                <div className="first-container-doc">
                <a href = './#/profile' class='clickable'>
                <div className="doc-profile">
                    <div className="left-container">
                        <img
                            src={doc}
                            alt=''
                            className='doc-img'
                        />
                        {/* <span class="material-icons"> thumb_up_off_alt thumb_down_off_alt </span> */}
                    </div>
                    
                    <div className="right-container">
                        <h2> Dr Amola Kumari, M.D</h2><br/>
                        <h6>Orthopaedic surgeon | 12 Yrs Exp.</h6>
                        <h6> <b>Practice Area:</b> Ankle sprain, Foot pain</h6>
                        <h6> <span class="material-icons"> location_on </span> Old Palasia, Indore | Paras Hospital</h6>
                        <h6> <span class="material-icons">phone </span> +91 9234123457</h6>
                        <h6> In-person consultation fee: ₹500</h6>
                        <h6> Overall patient rating: <span class="material-icons"> thumb_up</span><h7> 50 votes</h7></h6>
                        </div>
                    </div>    
                    </a>
            </div>
          
            
        </div>    
    );
};

export default Doctors;
