import React, { useState, useEffect } from "react";
import { createCalendar } from "./helpers";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import DoorGrid from './components/DoorGrid';
import PresentList from './components/PresentList';

import './style/App.css';



function App() {
  const [doors, setDoors] = useState(createCalendar());
  const [presents, setPresents] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputTarget, setInputTarget] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredPresents, setFilteredPresents] = useState([]);


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
    getLocalPresents();
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

  // Logic for present list

  // runs every time presents/status are updated
  useEffect(() => {
    handleFilter();
    saveLocalPresents();
  }, [presents, status]);



  const handleFilter = () => {
    switch(status) {
      case 'completed':
        setFilteredPresents(presents.filter(present => present.completed === true));
        break;
      case 'uncompleted':
        setFilteredPresents(presents.filter(present => present.completed === false));
        break;
      default:
        setFilteredPresents(presents);
        break;
    }
  };

  const saveLocalPresents = () => {
    localStorage.setItem('presents', JSON.stringify(presents));
  };

  const getLocalPresents = () => {
    if(localStorage.getItem('presents') === null) {
      localStorage.setItem('presents', JSON.stringify([]));
    } else {
      let localPresent = JSON.parse(localStorage.getItem('presents'));
      setPresents(localPresent);
    }
  }



  return (
    <Router>
      <div className="container">   
        <Switch>
          <Route exact path="/">
            < DoorGrid 
                doors={doors}
                handleFlipDoor={handleFlipDoor}
            />
          </Route>
          <Route path="/presentlist">
            < PresentList 
              presents={presents} 
              setPresents={setPresents}
              filteredPresents={filteredPresents}
              inputText={inputText}
              setInputText={setInputText}
              inputTarget={inputTarget}
              setInputTarget={setInputTarget}
              setStatus={setStatus}
              handleFilter={handleFilter}
            />
          </Route>
        </Switch>   

        <div className="copyright">
          <p>Copyright © 2021 Maria Manninen</p>
          <p>Photo by <a href="https://unsplash.com/@myriamzilles?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Myriam Zilles</a> on <a href="https://unsplash.com/collections/76239972/snowman-festival?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
          </div>
      </div>
    </Router>
  );
}

export default App;