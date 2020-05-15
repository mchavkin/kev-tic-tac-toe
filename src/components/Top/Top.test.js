import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react';
import {Provider} from "react-redux";
import '@testing-library/jest-dom/extend-expect'
import {createStore} from "redux";
import clickReducer from "../../redux/clickReducer";
import Top from "./Top";


const testStore = createStore(clickReducer,
    {
        gameOver: true,
        winner: 'O',
        xTurn: 'O'
    }
)

const TestTop = (props) =>
    <Provider store={testStore}>
        <Top {...props}/>
    </Provider>

afterEach(cleanup);

it("should show 'O' as a winner", () =>{
    const {getByTestId} = render(<TestTop/>)
    expect(getByTestId('info')).toHaveTextContent("Game over")
    expect(getByTestId('info')).toHaveTextContent("O wins")

})

it ("should change store state and react to it after button click", () =>{
    const {getByTestId} = render(<TestTop/>)

    fireEvent.click(getByTestId("button"))
    expect(getByTestId('info')).not.toHaveTextContent("Game over")
    expect(getByTestId('info')).not.toHaveTextContent("wins")
    expect(getByTestId('info')).toHaveTextContent("X turn")
})

