import React from 'react';

const StoryForm = ({inputText, setInputText, setAdjectives, adjectives}) => {

    const handleInput = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(adjectives)
        setAdjectives([
            ...adjectives,
            { text: inputText, id: Math.random() * 10000 }
        ]);
        setInputText("");
    };

    return (
        <form>
            <input value={inputText} onChange={handleInput} type="text" className="present-input" />
            <button onClick={handleSubmit} className="present-button" type="submit">
                Add +
            </button>
        </form>
    )
}

export default StoryForm;