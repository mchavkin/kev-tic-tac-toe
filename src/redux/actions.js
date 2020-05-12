import {CLICK} from "./actionTypes";


export const click = id => ({
    type: CLICK,
    payload: {id}
});