import React from "react"
import "../App.css"
import {connect} from "react-redux";
import {click} from "../redux/actions";

function Square(props) {

    const active = !props.value
    const onClick = active ? () => props.click(props.id) : undefined

    return (
        <div className={`square ${active ? "active" : ""}`}
             onClick={onClick}>
            {props.value}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => (
    {
        value: state.fields[ownProps.id]
    }
)

export default connect(mapStateToProps, {click})(Square)