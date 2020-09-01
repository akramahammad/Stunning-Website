import React from 'react';
import classes from './Topbar.module.css'
import logo from '../assets/stunning-logo.png';
import Button from '../Button/Button'
import Menuitem from '../Menuitems/Menuitems'
import Hamburger from '../assets/icons8-menu-24.png'

const Topbar =()=>{
    return(
        <header className={classes.HeaderDiv}>
        <img className={classes.logo} src={logo} alt="logo" />
        <nav>
        <Menuitem label="Home"/>
        <Menuitem label="About"/>
        <Menuitem label="Blog"/>
        <Menuitem label="Jobs"/>
        </nav>
        <div className={classes.Button}><Button label="Your Account" colour="Pink" /></div>
        <img src={Hamburger}className={classes.Hamburger} />
      </header>
    )
}
export default Topbar;