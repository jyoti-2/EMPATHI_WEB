import React from 'react'
import './StoriesCard.css';
import PatStory from "./../../assets/pat_story.jpg";

const Stories = () => {
    return (
        <div className="story-container" id = "stories">
            <h1> Patient Stories</h1>
            <img
            src={PatStory}
            alt=''
            className= "story-img"
            />
        </div>
    );
};

export default Stories;