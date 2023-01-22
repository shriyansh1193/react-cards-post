// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import './Handlevent.js';


function App() {

  function sayHello() {
    alert('Hello!');
  }
  
  return (
    <button onClick={sayHello}>
      Click me!
    </button>
  );
}

export default App;