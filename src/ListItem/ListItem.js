import React from 'react';
import classes from './ListItem.module.css'


const ListItem =(props)=>{
    return(
        <div className={props.card=="inactive"?classes.ListItem:`${classes.ListItem} ${classes.Active}`}>
        <div><img src={props.tickicon} className={classes.TickIcon}/>
        <p>{props.desc}</p>
        </div>
        <div><img src={props.usericon} className={classes.UserIcon}/>
        <p className={classes.Datetext}>{props.date}</p>
        <div style={{backgroundColor:props.color}} className={classes.ListColourDiv}></div>
        </div>
      </div>
    )
}
export default ListItem;
