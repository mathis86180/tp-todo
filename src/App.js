import React, { Component } from 'react';
import './App.css';
import {TodoList} from './TodoList';
import {TodoForm} from './TodoForm';

class App extends Component {
  
  
  render() {
    return (
     <div>
        <TodoList/>
        <TodoForm/>
     </div>
    );
  }
}

export default App;
