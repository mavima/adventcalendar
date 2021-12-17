import React from 'react';
import StoryForm from './StoryForm';
import shuffle from '../helpers';

const Story = ({setAdjectives, adjectives, inputText, setInputText, inputTarget, setInputTarget}) => {

    const createStory = () => {
        const shuffledList = shuffle(adjectives)
        setAdjectives(shuffledList)
    }

    if (adjectives.length < 10) {
    return (
        <div className="story-container">
            <h1>Give adjectives to write your own Christmas story</h1>
            <StoryForm
            adjectives={adjectives}
            setAdjectives={setAdjectives}
            inputText={inputText}
            setInputText={setInputText}
            inputTarget={inputTarget}
            setInputTarget={setInputTarget}
            />
            <ul className="">
            {adjectives.map(adjective => (
                
                <li key={adjective.key}>{adjective.text}</li>
            ))}
            </ul>
        </div>

    )} else {

        createStory()

        return(
            <div className="story-container">
                <h1>Christmas Story</h1>
                <p>This is a history of a {adjectives[0].text} reindeer that lived in a {adjectives[1].text} forest.</p>
            </div>
        )
    }

}

export default Story;