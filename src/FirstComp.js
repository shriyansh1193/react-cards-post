import React, { Component } from 'react';
import './App.css';
import './Handlevent.js';

class FirstComp extends React.Component {  

    
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
  }

  sayHello() {
    alert('Hello!');
  }
   render() {     
      return (  
          <div>      
            <table>
                <th>ID</th><th>Name</th><th>Email</th>
                <tr><td>1</td><td>Jatin</td><td>jatin@email.com</td></tr>
                <tr><td>1</td><td>Jatin</td><td>jatin@email.com</td></tr>
                <tr><td>1</td><td>Jatin</td><td>jatin@email.com</td></tr>
                <tr><td>1</td><td>Jatin</td><td>jatin@email.com</td></tr>
                <tr><td>1</td><td>Jatin</td><td>jatin@email.com</td></tr>
            </table>  
{/*             
                <button onClick="myFunction()">Click me</button>

                
            <span id="demo"></span>  */}
            
    <button onClick={this.sayHello}>
      Click me!
    </button>
            
          </div>  
        );  
    }  

    
  
}  
 
export default FirstComp;  