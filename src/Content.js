import React from "react";
import employeeData from './json/rnd_json'
import Employee from './Employee'

import todoData from './json/TodoJson'
import TodoList from './TodoList'
import Log from './log'
import ApiTest from './ApiTest'
import FormContainer from './FormContainer'

class Content extends React.Component {

    constructor()
    {
        super();
    }


    render() {

        //array function example
        //map
        const nums = [1,2,3,4,5,6,7,8,9];
        const dl_nums = nums.map(function(num){return num*2;});
        console.log(dl_nums);
        //filter

        //sort
        //reduce
        //every
        //some
        //find
        //findindex

        const n1 = "b";
        const n2 = "w";
        const date = new Date();
        const hours = date.getHours();
        let tod = "";

        var styles = {
            color: "Yellow",
            backgroundColor:"White",
            fontSize: 20    // default pixel px
        }

        if (hours < 12)
        {
            tod = "AM";
            styles.color = "DarkBlue";
        }
        else{
            tod = "PM";
            styles.color = "DarkRed";
        }


        const edataComponent = employeeData.map(e => <Employee key={e.firstName + " " + e.lastName} firstname={e.firstName} lastname={e.lastName} />)
        //const todoComponent = this.state.tododata.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return (
                <div id="Content">
                    
                    <FormContainer />
                    <Log/>
                    <ApiTest />      

                    <div style={{marginTop:"20px"}}>Yo {`${n1} ${n2}`}</div>   
                    <div>Yo {n1 + " " + n2}</div>
                    <div>It is now {tod + " "  + date.getHours()%12} o'clock</div>  
                    <div style={{color:"green", "backgroundColor":"yellow"}}>Example of how you put style in JSX, using double brackets {`{{}}`}</div>  
                    <div style={{color:"green", backgroundColor:"White"}}>Another Naming Example of how you put style in JSX, using Camel Casing for a dash within JS</div>  
                    <div style={styles}>Const Style variable Example of how you put style in JSX</div>
                    {/* <div className="todo-list">
                        {todoComponent}
                    </div> */}

                    <TodoList />
                    <div className="json-list">
                        {edataComponent}
                    </div>
                </div>
            )
    }
}
export default Content;