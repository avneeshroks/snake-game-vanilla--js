import { getInputDirection } from "./inputs.js";

export const SNAKE_SPEED = 5;

let snakeBody = [
    {x: 10, y: 10},
    // {x: 11, y: 10},
    // {x: 12, y: 10},
    // {x: 13, y: 10},
    // {x: 14, y: 10},
]

let newSegments = 0; 

export function update() {

    const inputDirection = getInputDirection();

    addSegments()

    for( let i = snakeBody.length - 2; i >= 0; i-- ) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach((segment) => {
        const snakeElem = document.createElement('div');
        snakeElem.style.gridRowStart = segment.y
        snakeElem.style.gridColumnStart = segment.x
        snakeElem.classList.add('snake')
        gameBoard.appendChild(snakeElem);
    })
}

export function expandSnake(amount) {
    newSegments += amount;
} 

export function onSnake(position, { ignoreHead = false } = {}) {
    if(!position) {
        return true
    }
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead : true })
}

export function equalPositions(segment, position) {
    return segment.x === position.x && segment.y === position.y
}

export function addSegments() {
    for( let i = 0; i < newSegments; i++ ){
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0
}