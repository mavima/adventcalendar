import React from 'react';
// import Door from './Door';
import { useParams, useHistory, Link } from "react-router-dom";

const Picture = ({doors, setDoors}) => {

    const currentId = useParams();
    const pageId = currentId.id
    const history = useHistory();

    const closeImage = () => history.push('/');
    



 
    return (

        <div>
            { doors.map(door => (
                <div className="picture-frame">
                    {pageId == door.id ? <img className="big-picture" src={door.link} alt={door.link} onClick={closeImage}/> 
                    : null}
                </div>
        ))}
        </div>
    )

}

export default Picture;