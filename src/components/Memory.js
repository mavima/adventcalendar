import { React, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import Card from './Card';



const cardImages = [
    { "src": "/img/Penguin.jpeg", matched: false},
    { "src": "/img/Raccoon.png" , matched: false},
    { "src": "/img/Reindeer.png" , matched: false},
    { "src": "/img/Santa.png", matched: false},
    { "src": "/img/Tree.png", matched: false},
    { "src": "/img/Squirrel.png", matched: false},
    { "src": "/img/Teddy.png", matched: false},
    { "src": "img/Snowman.png", matched: false},
]

const Memory = ({cards, setCards, turns, setTurns, cardOne, setCardOne, cardTwo, setCardTwo, disabled, setDisabled }) => {

    

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCardOne(null);
        setCardTwo(null);
        setCards(shuffledCards);
        setTurns(0);
    }

    const handleChoice = (card) => {
        cardOne  ? setCardTwo(card) : setCardOne(card);
    }


    const resetTurn = () => {
        setCardTwo(null)
        setCardOne(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    useEffect(() => {
        shuffleCards()
    }, [])

    useEffect(() => {
        if (cardOne && cardTwo) {
            setDisabled(true)  
            if (cardOne.src === cardTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === cardOne.src) {
                            return {...card, matched: true}                           
                        } else {
                            return card
                        }
                    });
                })
                resetTurn();
            } else {
                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [cardOne, cardTwo])

    const history = useHistory();
    const closeImage = () => history.push('/');

    return (
        <div>
            <div className="home-button-div whole-width">
                <button className="present-button no-margin" onClick={closeImage}><FontAwesomeIcon icon={faHome} /></button>
            
            </div>
            <div className="memory-board">
                <div className="memory-stripe">
                    <button onClick={shuffleCards} className="memory-button" id="memory-start-btn">Find pairs!</button>
                    <p className="turn-count">Turns: {turns}</p>
                </div>
            <div className="memory-grid">
            { cards.map(card => (
                <Card
                    card={card}
                    key={card.id}
                    src={card.src}
                    handleChoice={handleChoice}
                    disabled={disabled}
                    open={card === card.matched || card === cardOne || card === cardTwo}
                />
            ))}
            </div>
        </div>
    </div>
    )

}

export default Memory;