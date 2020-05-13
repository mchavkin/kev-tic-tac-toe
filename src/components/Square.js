import React from "react";
import {connect} from "react-redux";
import {click} from "../redux/actions";

export default function Square({status, ...restProps}) {

    const active = status === 'active' && !restProps.value
    return (
        <>
            {active ?
                <ActionSquare {...restProps}/>
                :
                <BaseSquare value={restProps.value} winner={status === 'winner'}/>
            }
        </>)
}

const BaseSquare = ({value, winner}) => (
    <div className={`square ${winner ? "winner" : ""}`}>
        {value}
    </div>
)


const ActionSquare = connect(null, {click})(props =>
    (
        <div className={`square active`}
             onClick={() => props.click(props.id)}>
            {props.value}
        </div>
    )
)


