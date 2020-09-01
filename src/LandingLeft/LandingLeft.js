import React from 'react';
import classes from './LandingLeft.module.css'
import Button from '../Button/Button'
import ListItem from '../ListItem/ListItem'
import ArrowUp from '../assets/arrow-up.png'
import ArrowDown from '../assets/arrow-down.png'
import TickIconGray from '../assets/tick-gray.png'
import TickIconBlue from '../assets/tick-blue.png'
import UserPink from '../assets/user-pink.png'
import UserBlue from '../assets/user-blue.png'
import UserOrange from '../assets/user-orange.png'
import UserRed from '../assets/user-red.png'

const LandingLeft =(props)=>{
    return(
        <div className={classes.LandingLeft}>
      <h1>Stunning Workplace<span>.</span></h1>
      <p>With Stunning,remote teams can organize projects, manage shifting priorities,and getting work done.</p>
      <div className={classes.ArrowDiv}>
      <Button label="New Account" colour="Violet"/>
      <img src={ArrowUp} alt="arrowup"/>
      <img src={ArrowDown} alt="arrowdown"/>
      </div>
      <div className={classes.ListDiv}>
        <ListItem tickicon={TickIconGray} desc="Dmm design" usericon={UserPink} date="20 Dec" card="inactive" color="pink"/>
        <ListItem tickicon={TickIconBlue} desc="Blurr Animation" usericon={UserOrange} date="22 Dec" card="active"color="red"/>
        <ListItem tickicon={TickIconGray} desc="Illustration" usericon={UserBlue} date="26 Dec" card="inactive" color="green"/>
        <ListItem tickicon={TickIconGray} desc="Refunds" usericon={UserRed} date="28 Dec" card="inactive" color="orange"/>
      </div>
      </div>
    )
}
export default LandingLeft;

