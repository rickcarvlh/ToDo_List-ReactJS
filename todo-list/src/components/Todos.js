import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';


class Todos extends Component {

  // * markComplete={this.props.markComplete} isto foi adicionado apos o eventHandler
//   * a passagem para o nivel acima faz-se atraves do props

  render() {
    // console.log(this.props.todos);
    //* todo is being passed as a prop
    return this.props.todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} />
    ));
  }
}

// PropTypes
Todos.proTypes = {
    todos: PropTypes.array.isRequired
};


export default Todos;
