import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';


const TodoList = ({ todos })  => {

    //передадим все item с index/const todoDate
    const elements = todos.map((item) => {
        return (
             <li key={item.id} className="list-group-item"> 
             <TodoListItem label={item.label} 
            important={item.important} />
            </li>
        );
    });
    
    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;