import React from "react";
import { StyledDoor } from '../style/DoorStyle';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";




const Door = ({ doorData: { id, day, link, image, open, isPicture }, handleClick }) => {

    const currentId = {id}
    console.log(currentId.id)

    const PictureDoor = () => {
        return (
            <Link to= {`/picture/${currentId.id}`}>
                <div className="link-box">
                    <div className="window-bottom">
                        <p><i className="fa fa-hand-pointer-o" aria-hidden="true"></i></p>
                    </div>
                </div>
            </Link>
        )
    }

    const LinkDoor = () => {
        return (
            <a href={link} target="_blank" rel="noreferrer">
                <div className="link-box">
                    <div className="window-bottom">
                        <p><i className="fa fa-hand-pointer-o" aria-hidden="true"></i></p>
                    </div>
                </div>
            </a>
        )
    }

    
    return (
    <StyledDoor background={image} onClick={() => handleClick(id)}>

        
    
        <div className={open ? "front open" : "front"}>
            <div className="window-top"></div>
                {isPicture === true ? <PictureDoor /> : <LinkDoor /> }
        </div>
        
        <div className={open ? "back open" : "back"}>
        <p className="day">{day}</p>
        </div>
    </StyledDoor>

    )};

export default Door;