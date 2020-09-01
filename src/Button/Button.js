import React from 'react';
import classes from './Button.module.css'

const Button =(props)=>{
    return(
        <button className={props.colour=="Violet"?`${classes.Button} ${classes.Violet}`:`${classes.Button} ${classes.Pink}`}>{props.label}</button>
    )
}
export default Button;