import React, {useState} from 'react';
import  InputField  from './InputField';
import { Todo } from './models/models';

import './App.css';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <h1 className='App-title'>Simple Todo 💫</h1>
      <p className='App-subtext'>Welcome to Simple Todo! Here you can create a todo list of things you need to get done and manage each todo.</p>
      <InputField  todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
