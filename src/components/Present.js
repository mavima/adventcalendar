import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


const Present = ({ text, target, present, presents, setPresents, handleFilter, filteredPresents }) => {
    const handleDelete = (e) => {
        setPresents(presents.filter((e) => e.id !== present.id) )
    }

    const handleComplete = (e) => {
        setPresents(presents.map((item) => {
            if(item.id === present.id) {
                return {
                    // switch the property completed
                    ...item, completed: !item.completed 
                }
            }
            return item;
        }))
    }

    return (
        <div className="present">
            <li className={`present-item ${present.completed ? "completed" :""}`}>{target}: {text}</li>
            <div className="present-btn-box">
                <button onClick={handleComplete}  className="complete-btn"><FontAwesomeIcon icon={faCheck} /></button>
                <button onClick={handleDelete} className="trash-btn"> <FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
    );
    
}

export default Present;