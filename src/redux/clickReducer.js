import {side} from "../config.js"
import {CLICK} from "./actionTypes";

// const fields = Array.from(Array(side ** 2).keys())
//     .reduce((acc, cur) => ({...acc, [`field${Math.floor(cur / side)}${cur % side}`]: {}}), {})
const initialState = {
    fields: {},
    log: [],
    xTurn: true,
    gameOver: false,
    winner: undefined
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CLICK: {
            return {
                ...state,
                fields: {
                    ...state.fields,
                    [action.payload.id]: state.xTurn ? 'X' : 'O'
                },
                log: [action.payload.id].concat(state.log),
                xTurn: !state.xTurn
            }

        }
        default:
            return state

    }
}