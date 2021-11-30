import styled from 'styled-components';
import snowflake from './snowflake.png';
import small_flake from './small_flake.png';


export const StyledDoor = styled.div`
    padding-top: 100%;
    position: relative;
    cursor: pointer;

    .back {
    position: absolute;
    background-color: transparent;
    background: center no-repeat url(${snowflake});
    top: 0px;
    left: 0px;
    z-index: 2;
    height: 100px;
    width: 100px;

    &.open {
        transform: rotateY(180deg);
        z-index: 0;
    } 
 }
 > div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all .8s;
    transform-style: preserve-3d;
    border-radius: 8px;
    border: 0.8px solid #99a0a8;
    box-sizing: border-box;
    perspective: 1000px;
 }

    .day {
        background-color: grey;
        color: white;
        padding: 3px;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        text-align: center;
        font-family: 'Praise', cursive;
        font-weight: bold;
        line-height: 20px;
    }

    .front {
            background-color: white;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            height: 100px;
            width: 100px;
            transform: rotateY(180deg);
            backface-visibility: hidden;
            display: flex;
            flex-direction: column;

                &.open {
                transform: rotateY(0deg);
                z-index: 2;
                backface-visibility: visible;
            }
        }

    .window-top {
        background-image: url(${props => props.background});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 100px;
        height: 80px;
    }

    .window-bottom {
        height: 22px;
        width: 100px;
        background-color:  #b6c7db;
        background-image: url(${small_flake}); 
        background-position: center;
        background-repeat-y: no-repeat;
        opacity: 0.85;
        text-align: right;
        padding-right: 5px;
        font-size: 12px;
        box-sizing: border-box;
        border-radius: 0 0 8px 8px;
        display: block;

        p {
            font-size: 12px;
            padding-top: 5px;
            margin: 0;
        }
    }

a {
         text-decoration: none;
         color: #113d70;
}

`