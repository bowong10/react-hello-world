import React from "react";

import todoData from './json/TodoJson'
import TodoItem from './TodoItem'

class TodoList extends React.Component {

    constructor()
    {
        super();
        this.state = {
            tododata: todoData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id){
        this.setState(prevState =>{
            const updatedTodo = prevState.tododata.map(todo => {
                if (todo.id === id)
                {
                    todo.completed = !todo.completed;
                }
                return todo;
            })

            return {
                tododata: updatedTodo
            }
        })

        //console.log(id);
    }

    render() {
        const todoComponent = this.state.tododata.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return (
                <div className="todo-list">
                        {todoComponent}
                </div>

            )
    }
}
export default TodoList;