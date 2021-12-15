import React, { useState, useEffect, useRef } from "react";
import { createCalendar } from "./helpers";
import { createQuiz } from './helpers';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DoorGrid from './components/DoorGrid';
import Picture from './components/Picture';
import Video from './components/Video';
import PresentList from './components/PresentList';
import NotFound from './components/NotFound';
import Memory from './components/Memory';
import Quiz from './components/Quiz';
import Recipe from './components/Recipe';
import Story from './components/Story';
// import Snake from './components/Snake';

import './style/App.css';




function App() {
  const [doors, setDoors] = useState(createCalendar());
  const [presents, setPresents] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputTarget, setInputTarget] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredPresents, setFilteredPresents] = useState([]);
  const [pictures] = useState([]);
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [language, setLanguage] = useState("english");
  const [quizPoints, setQuizPoints] = useState(0);
  const [questions, setQuestions] = useState(createQuiz());
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [character, setCharacter] = useState(null)
  const [dose, setDose] = useState(null)
  const [doses, setDoses] = useState([])
  const [recipe, setRecipe] = useState(null)
  const [portions, setPortions] = useState(10);
  const [adjectives, setAdjectives] = useState([]);
  // const [snake, setSnake] = useState([[8, 7], [8, 8]]);
  // const [ball, setBall] = useState([8, 3]);
  // const [dir, setDir] = useState([0, -1]);
  // const [speed, setSpeed] = useState(1500);
  // const [gameOver, setGameOver] = useState(false);


  const canvasRef = useRef();



  const current = new Date();
  
  const dateToday = `${current.getDate()}`
  // const dateToday = 20


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
          
          <Route exact path="/picture/:id">
            < Picture 
              pictures={pictures}
              doors={doors}
            />
          </Route>
          <Route exact path="/video/:id">
            < Video 
              doors={doors}
              setDoors={setDoors}
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
          <Route path="/memory">
            <Memory 
              cards={cards}
              setCards={setCards}
              turns={turns}
              setTurns={setTurns}
              cardOne={cardOne}
              cardTwo={cardTwo}
              setCardOne={setCardOne}
              setCardTwo={setCardTwo}
              disabled={disabled}
              setDisabled={setDisabled}
            />
          </Route>
          <Route path="/quiz">
            <Quiz 
              questions={questions}
              setQuestions={setQuestions}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              language={language}
              setLanguage={setLanguage}
              quizPoints={quizPoints}
              setQuizPoints={setQuizPoints}
              showResult={showResult}
              setShowResult={setShowResult}
              character={character}
              setCharacter={setCharacter}
            />
          </Route>
          <Route path="/recipe">
            <Recipe
              recipe={recipe}
              setRecipe={setRecipe}
              dose={dose}
              setDose={setDose}
              doses={doses}
              setDoses={setDoses}
              portions={portions}
              setPortions={setPortions}
              language={language}
              setLanguage={setLanguage}
              />
          </Route>
          {/* <Route path="/story">
            <Story
              adjectives={adjectives}
              setAdjectives={setAdjectives}
              inputText={inputText}
              setInputText={setInputText}
            />
          </Route> */}
          {/* <Route path="/snowworm">
            <Snake
              snake={snake}
              setSnake={setSnake}
              ball={ball}
              setBall={setBall}
              dir={dir}
              setDir={setDir}
              speed={speed}
              setSpeed={setSpeed}
              gameOver={gameOver}
              setGameOver={setGameOver}
              canvasRef={canvasRef}

            />
          </Route> */}
          <Route>
            <NotFound />
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