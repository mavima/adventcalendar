import { React } from 'react';
import { useHistory } from "react-router-dom";

const christmasCharacter = [
    {text: "The Grinch", src: "https://i.pinimg.com/474x/ea/64/ab/ea64abcb102827ef3409ddd9e51b1a19--watch-the-grinch-the-grinch-stole-christmas.jpg"},
    {text: "Snowman", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOZ0TNOuSZ9xmwJIJtIcybguCziCq_-zQEQ&usqp=CAU"},
    {text: "Rudolf", src: "https://vistapointe.net/images/rudolph-the-rednosed-reindeer-10.jpg"},
    {text: "Elf", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShcUtVI7yaY7eILMdu0hXe8dRj4GBdfu7tqA&usqp=CAU"}, 
    {text: "Angel", src: "https://thumbs.dreamstime.com/b/angel-cartoon-white-background-29826757.jpg"}
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

    const getResult = (points) => {
        if (points < 4) {
            setCharacter(christmasCharacter[0])
        } else if (points >= 5 && points < 9 ) {
            setCharacter(christmasCharacter[1]) 
        } else if (points >= 10 && points < 14 ) {
            setCharacter(christmasCharacter[2]) 
        } else if (points >= 14 && points < 18) {
            setCharacter(christmasCharacter[3])
        } else if (points >= 18){
            setCharacter(christmasCharacter[4])
        } else {
            setCharacter(christmasCharacter[2]) 
        }
    }

    const again = () => {
        setQuizPoints(0);
        setShowResult(false);
        setCurrentQuestion(0);
    }

    const history = useHistory();
    const closeImage = () => history.push('/');


    return (
        <div className="quiz-page">
            <h1 className="quiz-title">Christmas Quiz</h1>

            {showResult ? (
                <div>
                    <div className="quiz-result">Your Christmas Character: {character.text} {quizPoints}</div>
                    <img className="character-img" src={character.src} alt={character.text} />
                    <div className="inline-btns">
                        <button onClick={again} className="present-button margin-right">Again</button>
                        <button className="present-button" onClick={closeImage}>Home</button>
                    </div>
                </div>
            ) : (
            <div className="question">

                <div className="question-text">

                    {questions[currentQuestion].questionText}
                </div>
                <div className="options">
                    {questions[currentQuestion].options.map((option) =>
                        <div className="answer-button" onClick={handleClick}>{option.answerText}</div>
                    )}
                </div> 
            </div>
            )
        }
        </div>
    )

}

export default Quiz;