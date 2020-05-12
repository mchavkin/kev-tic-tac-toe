import React from "react";
import Square from "./components/Square";
import {side} from "./config.js"
import {click} from "./redux/actions";
import {connect} from "react-redux";


function TicTacToe(props) {
    const range = [...Array(side).keys()]
    return (
        <div className="flex-container">
            {range.map(col =>
                <div key={col} id={`col${col}`}>
                    {range.map(row => {
                            const id = `field${row}${col}`
                            return (
                                <Square key={id}
                                        id={id}
                                        pos={{row: row, col: col}}
                                    // value={props.fields[id]}
                                />
                            )
                        }
                    )}
                </div>
            )}
        </div>

    )

}

// const mapStateToProps = ({fields}) => ({fields})
//
// export default connect(mapStateToProps)(TicTacToe)

export default TicTacToe