import React from "react";
import {connect} from "react-redux";
import {newGame} from "../redux/actions";

function Top(props) {
    return (
        <div className="info">
            <div>TIC-TAC-TOE</div>
            <div>
                {!props.gameOver && `Player ${props.xTurn ? "X" : "O"} turn`}
                {props.gameOver && "Game over. "}
                {props.gameOver && (props.winner ? `Player ${props.winner} wins` : "Nobody wins")}
            </div>
            <button onClick={props.newGame}>Start over</button>
        </div>
    )
}

const mapStateToProps = state => (
    {
        gameOver: state.gameOver,
        winner: state.winner,
        xTurn: state.xTurn,
    }
)

export default connect(mapStateToProps, {newGame})(Top)