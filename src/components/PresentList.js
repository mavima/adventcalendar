import React from 'react';

import Form from './Form';
import Present from './Present';


const PresentList = ({ presents, setPresents, filteredPresents, inputText, setInputText, inputTarget, setInputTarget, status, setStatus, handleFilter}) => {



    return(
        <div className='present-list'>
            <h1 className="list-title">Gift Check List</h1>
            <p>Plan your Christmas presents and mark the ones you already have.</p>
            <p>For privacy your list is saved only on your own device.</p>
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
            
            
        </div>
    )
}

export default PresentList;