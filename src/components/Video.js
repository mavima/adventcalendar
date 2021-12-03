import React from "react";
import PropTypes from "prop-types";
import { useParams, useHistory, Link } from "react-router-dom";

import close from '../images/close.png';


const Video = ({doors}) => {

    const currentId = useParams();
    const pageId = currentId.id
    const history = useHistory();

    const closeImage = () => history.push('/');


    const VideoEmbed = ({ embedId }) => (
    <div className="video-responsive">
        <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded video"
        />
        <div className="close-video" onClick={closeImage}>
            <img className="close-icon" src={close} />
        </div>  
    </div>
    );

    VideoEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
    };

    return (

        <div>
            <div className="picture-frame">

                { doors.map(door => (
                    <div className="video-frame">
                        {pageId == door.id ? <VideoEmbed embedId={door.link}/> 
                        : null}
                    </div>
            ))} 
              
            </div>
        </div>



       
        

    );

}

export default Video;