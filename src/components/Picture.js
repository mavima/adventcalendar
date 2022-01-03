import React from 'react';
import { useParams, useHistory } from "react-router-dom";

const Picture = ({doors, id}) => {

    const currentId = useParams();
    const pageId = currentId.id
    const history = useHistory();

    const closeImage = () => history.push('/');
    

    return (

        <div>
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

