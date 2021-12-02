import React from 'react';

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
            <li className={`present-item ${present.completed ? "completed" :""}`}>{target}:{text}</li>
            <button onClick={handleComplete}  className="complete-btn">Done<i className="fas fa-check"></i></button>
            <button onClick={handleDelete} className="trash-btn">Delete<i className="fas fa-trash"></i></button>
        </div>
    );
    
}

export default Present;