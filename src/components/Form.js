import React from 'react';
import head from '../images/head.png';
import gift from '../images/gift.png';


const Form = ({ inputText, setInputText, inputTarget, setInputTarget, presents, setPresents, setStatus, filteredPresents }) => {
    const handleInput = (e) => {
        setInputText(e.target.value);
    }
    const handleTargetInput = (e) => {
        setInputTarget(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        setPresents([
            // fix id 
            ...presents,
            { text: inputText, target: inputTarget, completed: false, id: Math.random() * 10000 }
        ]);
        setInputText("");
        setInputTarget("");
    };

    const handleStatus = (e) => {
        setStatus(e.target.value)
    }

    return (
        // <h1>Form</h1>
        <form className="present-form">
            <img className="list-icon" src={head} />
            <input value={inputTarget} onChange={handleTargetInput} type="text" className="present-input"/>
            <img className="list-icon" src={gift} />
            <input value={inputText} onChange={handleInput} type="text" className="present-input" />
            <button onClick={handleSubmit} className="present-button" type="submit">
                Add +
            </button>
            <div className="select">
                <select onChange={handleStatus} name="presents" className="filter-present">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;