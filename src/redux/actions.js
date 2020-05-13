import {CLICK, NEW_GAME} from "./actionTypes";

export const click = id => ({
    type: CLICK,
    payload: {id}
});

export const newGame = () => (
    {
        type: NEW_GAME
    }
)