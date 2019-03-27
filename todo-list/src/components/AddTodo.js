import React, { Component } from "react";

export class AddTodo extends Component {
    
    /** quando se tem um input field em React normalmente espera-se
     *  sempre alguma expecie de state para acrescenter funcionalidades
     * 
     * state no input dispara sempre um onStatEvent que tem de ser tratado
     */

    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        // State level component
    }

  render() {
    return (
      <form style={{display: 'flex'}}>
        <input type="text" 
        name="title" 
        placeholder="Add Todo..." 
        style={{flex: '10', padding: '5px'}} 
        value={this.state.title}
        onChange={this.onChange}
        />
        <input 
        type="submit" 
        value="Submit" 
        className="btn" 
        style={{flex: '1'}}/>
      </form>
    );
  }
}

export default AddTodo;
