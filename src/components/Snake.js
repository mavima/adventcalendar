import React, {useState, useEffect, useRef} from 'react';
import { useInterval } from '../useInterval';


const canvas = [500, 500];
const startpoint = [
  [8, 7],
  [8, 8]
];
const startpoint_ball = [8, 3];
const scale = 40;
const speed = 500;
const directions = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0] // right
};

const Snake = ({snake, setSnake, ball, setBall, dir, setDir,  speed, setSpeed, gameOver, setGameOver, canvasRef}) => {


    

    const startGame = () => {
        setSnake(startpoint);
        setBall(startpoint_ball);
        setDir([0, -1]);
        setSpeed(speed);
        setGameOver(false);
    }

    const endGame = () => {
        setSpeed(null);
        setGameOver(true);
    }

    const moveWorm = ({keyCode}) => {
        console.log("moving");
        keyCode >= 37 && keyCode <= 40 && setDir(directions[keyCode])
    }

    const createBall = () => {

    }

    const checkCollision = (head, worm = snake) => {
        if (
            // collides with right wall
            head[0] * scale >= canvas[0] ||
            // collides with left wall
            head[0] < 0 ||
            // collides with bottom
            head[1] * scale >= canvas[1] ||
            // collides with top
            head[1] < 0
        ) {
            return true;
        } else {
            return false;
        }
    }

    const eatBall = () => {

    }

    const gameLoop = () => {
        const worm = JSON.parse(JSON.stringify(snake));
        const wormHead = [worm[0][0] + dir[0], worm[0][1] + dir[1]];
        worm.unshift(wormHead);
        if (checkCollision(wormHead)) endGame();
        worm.pop();
        setSnake(worm);
    }

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.setTransform(scale, 0, 0, scale, 0, 0);
        context.clearRect(0, 0, canvas[0], canvas[1]);
        context.fillStyle="pink";
        snake.forEach(([x,y]) => context.fillRect(x, y, 1, 1));
        context.fillStyle = "blue";
        context.fillRect(ball[0], ball[1], 1, 1)
    }, [snake, ball, gameOver])

    useInterval(() => gameLoop(), speed);
 
    return(
        <div className="game-canvas">
            <div role="button" tabIndex="0" onKeyDown={e=>moveWorm(e)}>
                <canvas
                style={{border: "1px solid green" }}
                ref={canvasRef}
                width={`${canvas[0]}px`}
                height={`${canvas[1]}px`}
                 />
                 {gameOver && <div>GAME OVER</div>}
                 <button onClick={startGame}>Start game</button>
            </div>
        </div>
    )

}

export default Snake;