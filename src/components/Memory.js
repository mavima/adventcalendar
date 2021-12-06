import {React, useEffect } from 'react';
import Card from './Card';
import shuffle from '../helpers';


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

const Memory = ({cards, setCards, turns, setTurns, cardOne, setCardOne, cardTwo, setCardTwo }) => {

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))
        setCards(shuffledCards);
        setTurns(0);
    }

    const handleChoice = (card) => {
        cardOne  ? setCardTwo(card) : setCardOne(card);
    }

    const findMatch = () => {
        if (cardOne && cardTwo) {
            if (cardOne.src === cardTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === cardOne.src) {
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })
                resetTurn();
            } else {
                resetTurn();
            }
        }
    }

    const resetTurn = () => {
        setCardTwo(null)
        setCardOne(null)
        setTurns(prevTurns => prevTurns + 1)
    }

    useEffect(() => {
        findMatch();
    }, [cardOne, cardTwo])
 

    return (
        <div className="memory-board">
        <button onClick={shuffleCards}>New game</button>
        <div className="memory-grid">
        { cards.map(card => (
            <Card
                card={card}
                key={card.id}
                src={card.src}
                handleChoice={handleChoice}
                open={card === cardOne || card === cardTwo || card === card.matched}
            />
        ))}
        </div>
    </div>
    )

}

export default Memory;