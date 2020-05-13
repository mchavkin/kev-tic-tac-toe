import {createStore} from "redux" 
import {loadState, saveState} from "./sessionStorage"
import clickReducer from "./clickReducer" 

const store = createStore(clickReducer, loadState())

store.subscribe(()=> {
    saveState(store.getState())
})

export default store