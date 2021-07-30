import React from 'react'
import './RatingsCard.css';
import { ProgressBar } from 'react-bootstrap';
//import Review from "./../../assets/reviews.png";


const Ratings = () => {
    return (
        <div className="rating-container" id = "ratings">
            {/* <div className="right-container">
            <img
            src={Review}
            alt=''
            className='rating-img'/>
            </div> */}
            <div className="left-container">
                <h5><b>1. Overall ranking  4.5/5 (100 ratings)</b></h5>
                <p>Overall ranking seem to be good. He has been consistently rated/ranked higher on factors like friendliness etc</p>
               <ProgressBar variant="success" now={90} label={`${9}`} />

                <br/>
                <h5><b>2. Spends time in listening & explaining to the patient  4/5 (100 ratings)</b></h5>
                <p>Rating on this factor is important as its important that the doctor takes time to explain to the patient about the ailment and treatment modalities. Acc to our internal data, doctors who spend more time with patients and get higher ratings & patient flow.</p>
                <ProgressBar variant="warning" now={50} label={`${5}`} />
                <br/>

                <h5><b>3. Treats patient with care & compassion 3.5/5 (80 ratings)</b></h5>
                <p>The doctor should treat every patient with care, empathy and compassion. He/she isnt only supposed to look at the physical ailment of the patient but look at the patient as a whole and offer one's solutions for improvement. </p>            
                <ProgressBar variant="warning" now={70} label={`${7}`} />
                <br/>
                <h5><b>4. Fair & transparent 3.5/5 (80 ratings)</b></h5>
                <p>The patients should find the doctor to be fair and transparent in discussing the ailment, recommendation for diagnostic tests and not ask for tests etc to be done at personally favored labs etc. </p>
                <ProgressBar variant="success" now={85} label={`${8}`} />

                <br/>

                <h5><b>5. Accurate diagnosis 4.5/5 (120 ratings)</b></h5>
                <p>This defines how accurately the doctor has discovered the root cause of the ailment, figured out some preliminary tests that are to be conducted and accurate diagnosis of the patient's illness </p>            
                <ProgressBar variant="danger" now={40} label={`${4}`} />

            
            
            
            </div>
        </div>
    );
};

export default Ratings;