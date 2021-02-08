import React from "react";
import employeeData from './json/rnd_json'
import Employee from './Employee'

import todoData from './json/TodoJson'
import TodoList from './TodoList'

class Log extends React.Component {

    constructor(){
        super();

        this.state = {
                        login: false
        };
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick()
    {
        this.setState(prevState =>{

            return {
                login: !prevState.login
            }
        })

        //console.log(id);

    }

    render(){

        let buttonText = this.state.login ? "Log out" : "Log in";
        let logText = this.state.login ? "You are currently Log in" : "You are currently Logged out"
        return (
            <div>
                <button onClick={() => this.handleClick()} style={{width:"500px", backgroundColor: "hotpink", color: "white"}}>{buttonText}</button>
                <p>{logText}</p>
            </div>
        );
    }   
}


export default Log;