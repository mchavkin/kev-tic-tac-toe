import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import Square from "./Square"
import store from "../../redux/store"
import {Provider} from "react-redux"
import '@testing-library/jest-dom/extend-expect'

const TestSquare = (props) =>
    <Provider store={store}>
        <Square {...props}/>
    </Provider>

afterEach(cleanup)


it('should be base and have an X mark', () => {
    const {getByTestId, queryByTestId} = render(<TestSquare status='base' value='X'/>)
    expect(queryByTestId('base-square')).not.toBe(null)
    expect(queryByTestId('action-square')).toBe(null)
    expect(getByTestId('base-square')).not.toHaveClass('active')
    expect(getByTestId('base-square')).toHaveTextContent('X')


})

it('should be active', () => {
    const {getByTestId, queryByTestId} = render(<TestSquare status='active' id={5}/>)
    expect(queryByTestId('base-square')).toBe(null)
    expect(queryByTestId('action-square')).not.toBe(null)
    expect(getByTestId('action-square')).toHaveClass('active')

})

it('active square should change Redux store ', () => {
    const id = 5
    const {getByTestId} = render(<TestSquare status='active' id={id}/>)

    let history = store.getState().history
    expect(history.length).toBe(1)
    expect(history[0][id]).toBeUndefined


    fireEvent.click(getByTestId('action-square'))

    history = store.getState().history
    expect(history.length).toBe(2)
    expect(history[0][id]).toBe('X')
    expect(history[1][id]).toBeUndefined


})

