import React from "react";
import { StyledDoor } from './DoorStyle';



const Door = ({ doorData: { id, day, link, image, open }, handleClick }) => (
    
    <StyledDoor background={image} onClick={() => handleClick(id)}>
    
    <div className={open ? "front open" : "front"}>
        <div className="window-top"></div>
        <a href={link} target="_blank" rel="noreferrer">
            <div className="window-bottom">
                <p><i className="fa fa-hand-pointer-o" aria-hidden="true"></i></p>
            </div>
        </a>
    </div>
    
    <div className={open ? "back open" : "back"}>
    <p className="day">{day}</p>
    </div>
    </StyledDoor>

);

export default Door;