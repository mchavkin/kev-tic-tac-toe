import React from 'react'
import {cleanup, render} from '@testing-library/react'
import Field from "./Field"
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

it('should have 3 rows with 3 elements in each', () => {
    const {getAllByTestId, queryAllByTestId} = render(<Field field={Array(9)} history/>)
    expect(queryAllByTestId("row").length).toBe(3)

    getAllByTestId('row').forEach(row => {
        expect(row.children.length).toBe(3)
    })
})