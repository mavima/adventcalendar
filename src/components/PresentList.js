import React from 'react';
import { Link, useHistory } from "react-router-dom";
import Form from './Form';
import Present from './Present';


const PresentList = ({ presents, setPresents, filteredPresents, inputText, setInputText, inputTarget, setInputTarget, status, setStatus, handleFilter}) => {

    const history = useHistory();
    const closeImage = () => history.push('/');

    return(
        <div className='present-list'>
            <h1 className="list-title">Gift Check List</h1>
            <p>Plan your Christmas presents and mark the ones you already have.</p>
            <p>For privacy your list is saved only on your own device.*</p>
            <Form 
                presents={presents} 
                setPresents={setPresents}
                filteredPresents={filteredPresents}
                inputText={inputText}
                setInputText={setInputText}
                inputTarget={inputTarget}
                setInputTarget={setInputTarget}
                setStatus={setStatus}
            />
            <ul className="present-list">
                {filteredPresents.map((present) => (
                    <Present 
                    setPresents={setPresents} 
                    presents={presents}
                    present={present}
                    key={present.id} 
                    text={present.text}
                    target={present.target}
                    handleFilter={handleFilter}
                    />
                ))}
            </ul>

            
            
           <p className="small-text">* Unless you empty the local storage</p> 

           <button className="present-button center" onClick={closeImage}>Home</button>
        </div>
    )
}

export default PresentList;