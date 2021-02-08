import React from "react";

function TodoItem(props){

    const completedItemStyle ={
        fontStyle :"italic",
        textDecoration:"line-through",
        color: "#cdcdcd"
    }
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)}></input>
            {
                //<p style={{textDecoration: props.item.completed? "line-through":"none"}}>{props.item.text}</p>
            }
            <p style={props.item.completed? completedItemStyle : null}>{props.item.text}</p>
            
        </div>
    )
}
export default TodoItem;