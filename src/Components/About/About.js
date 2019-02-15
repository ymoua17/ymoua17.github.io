import React from 'react';
import portrait from './portrait.jpg';
import Contact from '../Contact/Contact';
import './About.css'


const About = () => {
    return (
        <div id="about">
            <h1 className="fw3 underline">About Me</h1>
            <div className='center mw8'>
                <div className="cf">
                    <div className="v-mid pa2 fl w-100 w-50-ns">
                        <img src={portrait} alt="portrait" className="portrait br4"/>
                    </div>
                    <div className="white-80 v-mid pa3 fl w-100 w-50-ns">
                        <p className="mt0 f4">Welcome to my portfolio! I am a Software Developer seeking a full-time employment.
                    I have been teaching myself the fundementals of web development, both front and back-end. 
                    I have built several projects that showcases my skills and growth as a developer.</p>
                        <Contact />
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default About;
