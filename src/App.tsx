import React, {useState} from 'react';
import { InputField } from './InputField';

import './App.css';

function App() {
  
  //store all todos in app state in todos array full of string
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <div className="App">
      <h1 className='App-title'>Simple Todo 💫</h1>
      <p className='App-subtext'>Welcome to Simple Todo! Here you can create a todo list of things you need to get done and manage each todo.</p>
      <InputField />
    </div>
  );
}

export default App;
