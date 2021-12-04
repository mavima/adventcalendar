import React from "react";
import { StyledDoor } from '../style/DoorStyle';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import click from '../images/click.png';






const Door = ({ doorData: { id, day, link, image, open, isPicture, isVideo }, handleClick }) => {

    const currentId = {id}

    const PictureDoor = () => {
        return (
            <Link to= {`/picture/${currentId.id}`}>
                <div className="link-box">
                    <div className="window-bottom">
                        <img className="click-icon" src={click} alt="click here"/>
                    </div>
                </div>
            </Link>
        )
    }

    const VideoDoor = () => {
        return (
            <Link to= {`/video/${currentId.id}`}>
                <div className="link-box">
                    <div className="window-bottom">
                        <img className="click-icon" src={click} alt="click here"/>
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
                        <img className="click-icon" src={click} alt="click here"/>
                    </div>
                </div>
            </a>
        )
    }

    
    return (
    <StyledDoor background={image} onClick={() => handleClick(id)}>

        
    
        <div className={open ? "front open" : "front"}>
            <div className="window-top"></div>
            {isPicture === true &&
                <PictureDoor />
            }
            {isVideo === true &&
                <VideoDoor />
            }
            {(isPicture === false && isVideo === false) &&
                <LinkDoor />
            }
        </div>
        
        <div className={open ? "back open" : "back"}>
        <p className="day">{day}</p>
        </div>
    </StyledDoor>

    )};

export default Door;