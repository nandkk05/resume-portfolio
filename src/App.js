import React from 'react';
import './App.css';

import Left from "./components/Left"
import Right from "./components/Right"

function App() {
  return (
    <div className="App">
          <Left/>
          <Right resumeURL="https://github.com/nandkk05"/>
    </div>
  );
}

export default App;
