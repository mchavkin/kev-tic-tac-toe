export const loadState = () => {
    try {
        const serializedState = sessionStorage.getItem('state')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (e) {
        return undefined
    }
}

export const saveState = state =>{
    try {
        const serializedState = JSON.stringify(state)
        sessionStorage.setItem('state', serializedState)
    } catch (e) {
        console.log("fail to save state")
    }
}