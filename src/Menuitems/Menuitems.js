import React from 'react';
import classes from './Menuitems.module.css'

const Menuitem =(props)=>{
    return(
        <span className={classes.Menuitem}>{props.label}</span>
    )
}
export default Menuitem;