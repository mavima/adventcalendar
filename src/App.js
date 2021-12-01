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
      <div className="copyright">
        <p>Copyright © 2021 Maria Manninen</p>
        <p>Photo by <a href="https://unsplash.com/@myriamzilles?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Myriam Zilles</a> on <a href="https://unsplash.com/collections/76239972/snowman-festival?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        </div>
    </div>
  );
}

export default App;