import React, {Component} from 'react';
import './App.css';
import Dice from './components/Dice'
import Rolls from './components/Rolls'

function App() {
  return (
    <div className="App">
      <h1>Dice Roller</h1>
      <Dice />
      <Rolls />
    </div>
  );
}

export default App;
