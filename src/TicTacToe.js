import React from "react";
import Field from "./components/Field/Field";
import {connect} from "react-redux";
import Arrow from "./components/Arrow";
import Top from "./components/Top/Top";
import './App.css';

function TicTacToe(props) {
    return (
        <>
            <Top/>
            <Field field={props.history[0]} winningSquares={props.winningSquares}/>
            <div className="info">Log:</div>
            <div className="flex-container">
                {props.history.slice(1).map((field, index) => (
                    <React.Fragment key={index}>
                        {!!index && <Arrow/>}
                        <Field field={field} history/>
                    </React.Fragment>
                ))}
            </div>
        </>
    )

}

const mapStateToProps = state => (
    {
        history: state.history,
        winningSquares: state.winningSquares
    }
)

export default connect(mapStateToProps)(TicTacToe)