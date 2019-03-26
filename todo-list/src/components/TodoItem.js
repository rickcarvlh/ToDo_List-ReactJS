import React, {Component} from 'react';
import PropTypes from "prop-types";


class TodoItem extends Component {

    // * styling function
    getStyle = () => {
       return {
           background: '#f4f4f4',
           padding: '10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.todo.completed ? 'line-trought' : 'none'
       }
    };



    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" />
                {this.props.todo.title}</p>
            </div>
        );
    }
}

// propType
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired
}



export default TodoItem;
