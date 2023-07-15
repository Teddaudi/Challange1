import React from 'react';
import './Hero.css';
import HeroImage from '../images/image-hero-desktop.png';


const Hero = () => {
    return (
        <div className='Hero'>
            <div className='text'>
                <h1>Make <br/>remote work</h1>
                <p>Get your team in sync, no matter your location.
                <br/>Streamline processes, create team rituals, and<br/> 
                watch productivity soar.</p>
                <button className='learn-button'>Learn more</button>
            </div>
            <div className='hero-image'>
                <img src={HeroImage} alt='hero image' />
            </div>
        </div>
    )
}

export default Hero