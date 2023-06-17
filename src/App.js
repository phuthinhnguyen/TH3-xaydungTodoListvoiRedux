import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from './Components/TodoList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NewTodo from './Components/NewTodo';

function App() {
  return (
    <div className="container">
      <div style={{ marginTop: 40 }}>
        <h1>Todo list</h1>
        <div>
          <NewTodo />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </div>
  );

}

export default App;
