import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';


class Todos extends Component {
    render() {
        // console.log(this.props.todos);
        //* todo is being passed as a prop
        return this.props.todos.map((todo) =>(
            <TodoItem key={todo.id} todo = {todo}/>
        ));
    }
}

// PropTypes
Todos.proTypes = {
    todos: PropTypes.array.isRequired
};


export default Todos;
