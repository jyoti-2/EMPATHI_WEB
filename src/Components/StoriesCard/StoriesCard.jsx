import React from 'react'
import './StoriesCard.css';
import PatStory from "./../../assets/pat_story.jpg";

const Stories = () => {
    return (
        <div className="story-container" id = "stories">
            
            <div className="right-container">
            <img
            src={PatStory}
            alt=''
            className= "story-img"
            />
            </div>
            <div className="left-container">
                <div className="first-story">
                    <h4>Visited For Osteoarthritis</h4><br/>
                    <p>I visited the doctor a week back regarding my moms knee pain. She has osteoarthritis knee , consulted many orthopedic for this but could not get a satisfactory treatment. Then I consulted Dr.Amola. Her concept was very clear about the treatment options. Now I know what should be done for my mom's knee problem.We are very satisfied with the consultation, doctor was very good and calm, treated very nicely and given ample time and priority.
                        I would like to recommend him.</p>
                </div>
                <br/>
                <div className="first-story">
                    <h4>Visited For Knee Replacement </h4><br/>
                    <p>I visited the clinic and very satisfied with the consultation. Ample time given by the doctor and direct conversation with patient. Some sample medicine also provided to me at no cost. Behavior of doctor and their staff was quite good and cooperative. I recommend other patient for the treatment. Thanks</p>
                </div>
            </div>

        </div>
    );
};

export default Stories;