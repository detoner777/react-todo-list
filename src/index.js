import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';



const App = () => {

    const todoDate = [
        { label: 'Drink Coffe', important: false },
        { label: 'Make Awesome App', important: true },
        { label: 'HAve a lunch', important: false }
    ];

    return (
    <div>
        <AppHeader />
        <SearchPanel />  
        <TodoList todos={todoDate} />
    </div>
    );
};

ReactDOM.render(<App />,
     document.getElementById('root'));
