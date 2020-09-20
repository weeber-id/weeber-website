import React from 'react';
import { Route } from 'react-router-dom';
import { About } from './pages';

function App() {
  return (
    <div className="App">
      <Route path="/about" exact component={About} />
    </div>
  );
}

export default App;
