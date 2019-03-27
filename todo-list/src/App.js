import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: true
      },
      {
        id: 3,
        title: "Metting with boss",
        completed: false
      }
    ]
  };

  // * chegou-se finalmente a este lvl desde o TodoItems porque o estado está aqui e não
  // * em TodoItems (state)
  /** como se passou o id desde o TodoItem.js atraves do props até aqui
   *  podemos usa-lo na funçao em baixo como variavel
   *
   *
   * Não esquecer que o state é um objecto
   * */

  /** vamos utilizar o estado e funçao/ method para mudar algo no todos
   *  para fazer uma comparaçao o melhor é mesmo usar o map porque faz uma copia do array
   *  o todo usado na arrow function é a copia criada pele metodo map o original é o todos
   *  tudo o resto é feito sempre com a copia
   */

  //  * ToggleComplete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // * Delete Todo
  // * para remover vamos ter de utilizaar o metodo filter() -> high order array method
  /** faz uma expecie deb loop e com base na condiçao vai devolver outro array
   *  ou seja nos so queremos devolver todos que não iguais ao que foi passado
   *  porque esse é o que nos queremos apagar
   */
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    // console.log(this.state.todos);

    // ! sempre que puxar um props ate aqui nao esquecer de escrever tambem a funçao que este vai usar

    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
