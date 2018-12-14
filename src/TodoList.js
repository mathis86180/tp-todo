import React from 'react';
import Json from './todo.json';
import { TodoItem } from './TodoItem';

class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const todoList = Json.map((item, index) => <TodoItem key={ index } title={ item.title } isDone={item.isDone}/>);
        return(
            <div>
                 <ul>
                    {todoList}
                </ul>
                <div>
                    
                </div>
            </div>
        );

    }

}


export { TodoList }