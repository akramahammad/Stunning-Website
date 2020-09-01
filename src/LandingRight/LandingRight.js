import React from 'react';
import classes from './LandingRight.module.css'
import LandingImage from '../assets/landing-section-image.png'

const LandingRight =(props)=>{
    return(
        <div className={classes.LandingRight}>
        <img className={classes.LandingImage} src={LandingImage} alt="Landing image"/>
      </div>
    )
}
export default LandingRight;
