import { React } from 'react';
import { useHistory } from "react-router-dom";
import {createQuiz} from '../helpers';
import {createFinnishQuiz} from '../helpers';
import english from '../images/english.png';
import finnish from '../images/finnish.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


const christmasCharacter = [
    {id: Math.floor(Math.random() * 1000), text: "The Grinch", src: "https://i.pinimg.com/474x/ea/64/ab/ea64abcb102827ef3409ddd9e51b1a19--watch-the-grinch-the-grinch-stole-christmas.jpg"},
    {id: Math.floor(Math.random() * 1000), text: "Snowman", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOZ0TNOuSZ9xmwJIJtIcybguCziCq_-zQEQ&usqp=CAU"},
    {id: Math.floor(Math.random() * 1000), text: "Rudolf", src: "https://vistapointe.net/images/rudolph-the-rednosed-reindeer-10.jpg"},
    {id: Math.floor(Math.random() * 1000), text: "Elf", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShcUtVI7yaY7eILMdu0hXe8dRj4GBdfu7tqA&usqp=CAU"}, 
    {id: Math.floor(Math.random() * 1000), text: "Angel", src: "https://thumbs.dreamstime.com/b/angel-cartoon-white-background-29826757.jpg"}
]

const christmasCharacterFinnish = [
    {id: Math.floor(Math.random() * 1000), text: "Grinch", src: "https://i.pinimg.com/474x/ea/64/ab/ea64abcb102827ef3409ddd9e51b1a19--watch-the-grinch-the-grinch-stole-christmas.jpg"},
    {id: Math.floor(Math.random() * 1000), text: "Lumiukko", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOZ0TNOuSZ9xmwJIJtIcybguCziCq_-zQEQ&usqp=CAU"},
    {id: Math.floor(Math.random() * 1000), text: "Petteri Punakuono", src: "https://vistapointe.net/images/rudolph-the-rednosed-reindeer-10.jpg"},
    {id: Math.floor(Math.random() * 1000), text: "Tonttu", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShcUtVI7yaY7eILMdu0hXe8dRj4GBdfu7tqA&usqp=CAU"}, 
    {id: Math.floor(Math.random() * 1000), text: "Enkeli", src: "https://thumbs.dreamstime.com/b/angel-cartoon-white-background-29826757.jpg"}
]


const Quiz = ({questions, setQuestions, currentQuestion, setCurrentQuestion, setShowResult, showResult, language, setLanguage, quizPoints, setQuizPoints, character, setCharacter}) => {

    const handleClick = ((props) => {
        const myAnswer = props.target.firstChild.data;
        getPoints(myAnswer)
        
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            getResult(quizPoints);
            setShowResult(true);
        }
    })

    const getPoints = (answer) => {
        questions[currentQuestion].options.forEach((option) => {
            if (answer === option.answerText) {
                setQuizPoints(quizPoints + option.points)
                console.log(option.points);
            }
        })
    }

    const englishQuiz = () => {
        setLanguage("english");
        setQuestions(createQuiz);
    }

    const finnishQuiz = () => {
        setLanguage("finnish");
        setQuestions(createFinnishQuiz);
    }

    const getResult = (points) => {
        if (points < 4) {
            language === "english" ? setCharacter(christmasCharacter[0]) : setCharacter(christmasCharacterFinnish[0])
        } else if (points >= 5 && points < 9 ) {
            language === "english" ? setCharacter(christmasCharacter[1]) : setCharacter(christmasCharacterFinnish[1])
        } else if (points >= 10 && points < 14 ) {
            language === "english" ? setCharacter(christmasCharacter[2]) : setCharacter(christmasCharacterFinnish[2])
        } else if (points >= 14 && points < 18) {
            language === "english" ? setCharacter(christmasCharacter[3]) : setCharacter(christmasCharacterFinnish[3])
        } else if (points >= 18){
            language === "english" ? setCharacter(christmasCharacter[4]) : setCharacter(christmasCharacterFinnish[4])
        } else {
            language === "english" ? setCharacter(christmasCharacter[1]) : setCharacter(christmasCharacterFinnish[1])
        }
    }

    const again = () => {
        setQuizPoints(0);
        setShowResult(false);
        setCurrentQuestion(0);
    }

    const history = useHistory();
    const closeImage = () => history.push('/');

    if (language === "finnish") {
        return (
            <div className="quiz-page">
                <div className="home-button-div whole-width">
                    <button className="present-button no-margin" onClick={closeImage}><FontAwesomeIcon icon={faHome} /></button>
                </div>
                <h1 className="quiz-title">Löydä oma jouluhahmosi</h1>

                {showResult ? (
                    <div>
                        <div className="quiz-result">Sinun jouluhahmosi on: {character.text} </div>
                        <img className="character-img" src={character.src} alt={character.text} />
                        <div className="inline-btns">
                            <button onClick={again} className="present-button">Uudelleen</button>
                        </div>
                    </div>
                ) : (
                <div className="question">

                    <div className="question-text" key={questions[currentQuestion].id}>

                        {questions[currentQuestion].questionText}
                    </div>
                    <div className="options">
                        {questions[currentQuestion].options.map((option) =>
                            <div className="answer-button" onClick={handleClick} key={option.id}>{option.answerText}</div>
                        )}
                    </div> 
                    <img src={english} onClick={englishQuiz} alt="english" className="flag-button"/>
                </div>
                )
            }
            </div>
        )
    } else {
        return (
            <div className="quiz-page">
                <div className="home-button-div whole-width">
                    <button className="present-button no-margin" onClick={closeImage}><FontAwesomeIcon icon={faHome} /></button>
                </div>
                <h1 className="quiz-title">Christmas Quiz</h1>

                {showResult ? (
                    <div>
                        <div className="quiz-result">Your Christmas Character: {character.text}</div>
                        <img className="character-img" src={character.src} alt={character.text} />
                        <div className="inline-btns">
                            <button onClick={again} className="present-button margin-right">Again</button>

                        </div>
                    </div>
                ) : (
                <div className="question">

                    <div className="question-text">

                        {questions[currentQuestion].questionText}
                    </div>
                    <div className="options">
                        {questions[currentQuestion].options.map((option) =>
                            <div className="answer-button" onClick={handleClick} key={option.points + Math.floor(Math.random() * 1000)}>{option.answerText}</div>
                        )}
                    </div> 
                </div>
                )
            }
            <img src={finnish} onClick={finnishQuiz} alt="finnish" className="flag-button"/>
            </div>
        )

    }

}

export default Quiz;