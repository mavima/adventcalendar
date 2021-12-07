import React from 'react';
import cardback from '../images/cardback.jpg';

const Card = ({id, src, handleChoice, card, open, disabled}) => {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    }

    if (card.matched) {
        return (
            <div className="card">
                <div className="open">
                    <img 
                        src={card.src} 
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
    } else {
        return (
            <div className="card">
                <div className={open ? "open" : ""}>
                    <img 
                        src={card.src} 
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
}

export default Card;