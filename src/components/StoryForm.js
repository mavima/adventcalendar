import React from 'react';

const StoryForm = ({inputText, setInputText, setAdjectives, adjectives}) => {

    const handleInput = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (inputText !== "") {
            setAdjectives([
                ...adjectives,
                { text: inputText.toLowerCase(), key: Math.random() * 10000 }
            ]);
            setInputText("");
        } else {
            setInputText(""); 
        }

    };

    return (
        <form className="story-form">
            <input value={inputText} onChange={handleInput} type="text" className="present-input" />
            <button onClick={handleSubmit} className="present-button" type="submit">
                Add +
            </button>
        </form>
    )
}

export default StoryForm;