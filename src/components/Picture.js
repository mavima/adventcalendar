import React from 'react';
import { useParams, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Picture = ({doors, id}) => {

    const currentId = useParams();
    const pageId = currentId.id
    const history = useHistory();

    const closeImage = () => history.push('/');
    

    return (

        <div>
            <div className="home-button-div whole-width">
                <button className="present-button no-margin" onClick={closeImage}><FontAwesomeIcon icon={faHome} /></button>
            </div>
            { doors.map(door => (
                <div className="picture-frame" key={door.id}>
                    {pageId == door.id ? <img className="big-picture" src={door.link} alt={door.link} onClick={closeImage}/> 
                    : null}
                </div>
        ))}
        </div>
    )

}

export default Picture;

