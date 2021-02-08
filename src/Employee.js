import React from "react";

function Employee(props){
    return (
        <div id="Employee">
            <div style={{color: props.firstname=="John"? "red":"black" /*ternary operator */}}>   
                firstname: {props.firstname}
            </div>
            <div>
                lastname: {props.lastname}
            </div>
        </div>   
    )
}
export default Employee;