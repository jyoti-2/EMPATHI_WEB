import React from 'react';
import "./About.css";
import about_1 from "./../../assets/about_1.jpg";
import about_2 from "./../../assets/about_2.png";
import about_3 from "./../../assets/about_3.png";
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div className="include-footer">
        <div className="about-container">
            <div className="header" data-aos="fade-down">
                About us
            </div>
            <div className="first-container">
        <img        
                    data-aos="zoom-in"
                    src={about_1}
                    className='first-image'
                    alt=''
                />
        <p className='first-para' data-aos="zoom-in" > Choosing a doctor is one of the most important decisions you will make for a loved one. Empathi is building India’s 1st collection of detailed profiles of doctors based on their qualifications, expertise & patient ratings so that you can discover the RIGHT doctor for your loved ones.</p>
            </div>
            <div className="second-container">
                <p className='second-para' data-aos="zoom-in"> Empathi's aims to empower you, as a patient or a caregiver, by providing trustworthy & objective information about your health care. The patient ratings on Empathi are provided by registered users like you with protocols to filter unwarranted/irrelevant posts. So you can trust every single doctor rating on Empathi.</p>
            <img
                    data-aos="zoom-in"
                    src={about_2}
                    className='second-image'
                    alt=''
                />
            </div>
            <div className="third-container">
                <img
                    data-aos="zoom-in"
                    src={about_3}
                    className='third-image'
                    alt=''
                />
                <p className='third-para' data-aos="zoom-in">Consulting with a doctor is not just a health issue but also an emotional & a private issue for many of us. At Empathi, we understand that. That is why, we have ratings for doctors across several parameters. Go ahead & choose.
</p>
                </div>
        </div>
            <Footer />
            </div>
        

    );
};

export default About;
