import React from 'react';
import cardback from '../images/cardback.jpg';

const Card = ({id, src, handleChoice, card, open}) => {

    const handleClick = () => {
        handleChoice(card);
    }

    return (
        <div className="card">
            <div className={open ? "openCard" : ""}>
                <img 
                    src={src} 
                    alt="card-front" 
                    className="card-front" 
                />
                <img 
                    className="card-back"
                    onClick={handleClick}
                    src={cardback}
                    alt="card-back"
                />
            </div>
        </div>
    )

}

export default Card;