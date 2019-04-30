import React from 'react';
//import './app/app.css';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';



const App = () => {

    const todoDate = [
        { label: 'Drink Coffe', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'HAve a lunch', important: false, id: 3 }
    ];

    return (
    <div>
        <AppHeader />
        <SearchPanel />  
        <TodoList todos={todoDate} />
    </div>
    );
};

export default App;