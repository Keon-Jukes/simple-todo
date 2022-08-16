import React from 'react';
import { InputField } from './InputField';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='App-title'>Simple Todo 💫</h1>
      <p className='App-subtext'>Welcome to Simple Todo! Here you can create a todo list of things you need to get done and manage each todo.</p>
      <InputField />
    </div>
  );
}

export default App;
