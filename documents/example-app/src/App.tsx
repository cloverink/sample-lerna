import React from 'react';
import './App.css';

import { Hello } from '@sample-lerna/helloworld'

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>

      <Hello name="wow"></Hello>
    </div>
  );
}

export default App;
