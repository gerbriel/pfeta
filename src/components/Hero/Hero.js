import React from 'react';
import './Hero.css';
import '../../App.css';
import{Button} from '../Button/Button';


function Hero() {
    return (
        <div className='hero-container'>
    
            <h1>Peope for ethical treatment of animals</h1>
            <p>Meat is murder</p>
            <div className='hero-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Learn More
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    visit a center
                </Button>
            </div>
        </div>
    );
}

export default Hero;
