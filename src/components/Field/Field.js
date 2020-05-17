import React from "react"
import {RANGE, SIDE} from "../../config.js"
import Square from "../Square/Square"


export default function Field(props) {
    return (
        <div className={props.history ? "history" : "main-field"}>
            {RANGE.map(row =>
                <div key={row} className="row" data-testid ="row">
                    {RANGE.map(col => {
                            const id = SIDE * row + col
                            let status
                            if (props.history) status = 'base'
                            else if (props.winningSquares.length) status = props.winningSquares.includes(id) ? 'winner' : 'base'
                            else status = 'active'

                            return (
                                <Square key={id}
                                        id={id}
                                        value={props.field[id]}
                                        status={status}
                                />
                            )
                        }
                    )}
                </div>
            )}
        </div>
    )

}

