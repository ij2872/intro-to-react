import React from 'react';
import TodoList from './Components/TodoList';
import HomePage from './example.js'
import UserExample from './Components/UserExample'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <UserExample></UserExample>
    </div>
  );
}

// <HomePage></HomePage>
// <TodoList title="School"></TodoList>

export default App;
