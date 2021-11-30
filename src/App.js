import React, { useState, useEffect } from "react";
import { createCalendar } from "./helpers";
import Door from "./Door";
import './App.css';



function App() {
  const [doors, setDoors] = useState(createCalendar());


  const current = new Date();
  const dateToday = `${current.getDate()}`


  const enableDoors = day => {
    const availableDoors = doors.map(door =>
      door.day <= (dateToday) ? { ...door, available: !door.available } : door
    );
    setDoors(availableDoors);
  }

  useEffect(() => {

    enableDoors();
  }, [])



  // Store calendar in localStorage
  // useEffect(() => {
  //   const calendar = localStorage.calendar ? 
  //   JSON.parse(localStorage.calendar) : createCalendar();
  //   setDoors(calendar);
  // }, []);
 

  const handleFlipDoor = id => {
    // only for the available doors according to date
    console.log(dateToday);
    const availableDoors = doors.map(door =>
      door.available === true);
    setDoors(availableDoors);
    // update open / closed
    const updatedDoors = doors.map(door =>
      door.id === id && door.available ? { ...door, open: !door.open } : door
    );
    setDoors(updatedDoors);
  };



  return (
    <div className="container">
      
      <div className="door-grid">
        {doors.map(door => (
          <Door
            key={door.id}
            doorData={door}
            handleClick={handleFlipDoor}
            // enableDoors={enableDoors}
          />
        ))}
      </div>
    </div>
  );
}

export default App;