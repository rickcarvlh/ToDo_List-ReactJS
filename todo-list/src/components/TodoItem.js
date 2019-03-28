import React, {Component} from 'react';
import PropTypes from "prop-types";


class TodoItem extends Component {

    // * styling function
    getStyle = () => {
       return {
           background: '#f4f4f4',
           padding: '10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.todo.completed ? 'line-through' : 'none'
       }
    };



    // * o props estaa ser usado para irmos subido na arvore de TodoItems para Todos
    /** isto é o que é considerado destructuring:
     *  ou seja numa liguagem manhosa estou a puxar as variaveis para fora e assim
     * não preciso de estar sempre a fazer por exemplo this.props.todo.title quando
     * preciso do title
     */
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                {title} 
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        );
    }
}

// propType
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

// PropTypes
TodoItem.proTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
};



export default TodoItem;
