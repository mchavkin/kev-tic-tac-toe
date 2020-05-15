import {SIDE} from "../config.js"
import {CLICK, NEW_GAME} from "./actionTypes";

const totalSquares = SIDE ** 2

const initialState = {
    history: [Array(totalSquares)],
    xTurn: true,
    gameOver: false,
    winner: null,
    winningSquares: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CLICK: {
            let turn = state.xTurn ? 'X' : 'O'
            let newField = [...state.history[0]]
            newField[action.payload.id] = turn
            let winningSquares = checkWinner(newField, action.payload.id, turn)

            return {
                history: [newField, ...state.history],
                xTurn: !state.xTurn,
                gameOver: winningSquares.length || newField.every(square => !!square),
                winner: winningSquares.length ? turn : null,
                winningSquares: winningSquares
            }
        }
        case NEW_GAME: {
            return initialState
        }
        default:
            return state

    }
}

const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkWinner(field, id, turn) {
    const checkLines = lines.filter(line => line.includes(id) && line.every(val => turn === field[val]))
    return Array.from(new Set(checkLines.flat()))
}