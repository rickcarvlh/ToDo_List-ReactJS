import React, { Component } from 'react';
import Todos from './components/Todos';


import './App.css';

class App extends Component {
  state = {
    todos: [
          {
            id:1,
            title: 'Take out the trash',
            completed: false
          },
          {
            id:2,
            title: 'Dinner with wife',
            completed: true
          },
          {
            id:3,
            title: 'Metting with boss',
            completed: false
          }
    ]
  }

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

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  render() {
    // console.log(this.state.todos);
    
    return (
      <div className="App">
        <Todos todos = {this.state.todos} markComplete = {this.markComplete}/>
      </div>
    );
  }
}

export default App;
