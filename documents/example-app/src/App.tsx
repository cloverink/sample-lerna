import React from 'react';
import './App.css';

import { Hello, Foo } from 'helloworld'

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>

      <Hello name="wow"></Hello>
      <Foo name="hi"></Foo>
    </div>
  );
}

export default App;
