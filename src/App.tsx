import React from 'react';
import { ModelContextProvider } from './context/modelContext';
import { Home } from './Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <ModelContextProvider>
      <h1>Simple Todo 💫</h1>
      <h4>Its that simple!</h4>
      <Home />
      </ModelContextProvider>
    </div>
  );
}

export default App;
