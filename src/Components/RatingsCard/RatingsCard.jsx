import React from 'react'
import './RatingsCard.css';
import Review from "./../../assets/reviews.png";


const Ratings = () => {
    return (
        <div className="rating-container" id = "ratings">
            <div className="right-container">
            <img
            src={Review}
            alt=''
            className='rating-img'/>
            </div>
            <div className="left-container-rat">
                <h5><b>Overall ranking  4.5/5 (100 ratings)</b></h5>
                <p>Overall ranking seem to be good. He has been consistently rated/ranked higher on factors like friendliness etc</p>
                <br/>
                <h5><b>Spends time in listening & explaining to the patient  4/5 (100 ratings)</b></h5>
                <p>Rating on this factor is important as its important that the doctor takes time to explain to the patient about the ailment and treatment modalities. Acc to our internal data, doctors who spend more time with patients and get higher ratings & patient flow.</p>
                <br/>

                <h5><b>Treats patient with care & compassion 3.5/5 (80 ratings)</b></h5>
                <p>The doctor should treat every patient with care, empathy and compassion. He/she isnt only supposed to look at the physical ailment of the patient but look at the patient as a whole and offer one's solutions for improvement. </p>            
                <br/>
                <h5><b>Fair & transparent 3.5/5 (80 ratings)</b></h5>
                <p>The patients should find the doctor to be fair and transparent in discussing the ailment, recommendation for diagnostic tests and not ask for tests etc to be done at personally favored labs etc. </p>

                <br/>

                <h5><b>Accurate diagnosis 4.5/5 (120 ratings)</b></h5>
                <p>This defines how accurately the doctor has discovered the root cause of the ailment, figured out some preliminary tests that are to be conducted and accurate diagnosis of the patient's illness </p>            
            
            
            
            
            </div>
        </div>
    );
};

export default Ratings;