import React from "react";
import {range, side} from "../config.js"
import Square from "./Square";


export default function Field(props) {
    return (
        <div className={props.history ? "history" : "main-field"}>
            {range.map(row =>
                <div key={row} className="row">
                    {range.map(col => {
                            const id = side * row + col
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
