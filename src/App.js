import React from 'react';
import Topbar from './Topbar/Topbar'
import LandingLeft from './LandingLeft/LandingLeft'
import classes from './App.module.css';
import LandingRight from './LandingRight/LandingRight'
import ListItem from './ListItem/ListItem'
import TickIconGray from './assets/tick-gray.png'
import TickIconBlue from './assets/tick-blue.png'
import UserPink from './assets/user-pink.png'
import UserBlue from './assets/user-blue.png'
import UserOrange from './assets/user-orange.png'
import UserRed from './assets/user-red.png'


function App() {
  return (
    <div className="App">
    <Topbar/>
      <div className={classes.LandingSection}>
      <LandingLeft/>
      <LandingRight/>
            </div>
            <div className={classes.ListDiv}>
        <ListItem tickicon={TickIconGray} desc="Dmm design" usericon={UserPink} date="20 Dec" card="inactive" color="pink"/>
        <ListItem tickicon={TickIconBlue} desc="Blurr Animation" usericon={UserOrange} date="22 Dec" card="active"color="red"/>
        <ListItem tickicon={TickIconGray} desc="Illustration" usericon={UserBlue} date="26 Dec" card="inactive" color="green"/>
        <ListItem tickicon={TickIconGray} desc="Refunds" usericon={UserRed} date="28 Dec" card="inactive" color="orange"/>
      </div>

      </div>
  );
}

export default App;
