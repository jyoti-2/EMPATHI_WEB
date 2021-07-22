import React from 'react'
import './RatingsCard.css';
import Review from "./../../assets/reviews.png";


const Ratings = () => {
    return (
        <div className="rating-container" id = "ratings">
            <h1> Patient Ratings</h1>
            <img
            src='Review'
            alt=''
            className='Rating-img'/>
        </div>
    );
};

export default Ratings;