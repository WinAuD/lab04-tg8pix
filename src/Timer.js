import React, { Component } from"react";
//import AddButton from './AddButton.js';
import './Timer.css';
 
class Timer extends Component {
  
  // state = { count: 0 }; // Key-Value-Paar

  // add = (i) => { // F. 99, mit Updater-Funktion F.87 (Aufgabe 6)
  //   this.setState((state) => ({ count: state.count + i}));
  // }

  // add = (i) => { // F. 99, ohne Updater-Funktion (Aufgabe 5)
  //   this.setState({ count: this.state.count + i});
  // }

  render() { // F. 99
    
    return (
      <div>
        <div className="timer">
          Zeile1
        </div>
        <div className="timer">
          Zeile2
        </div> 
        <div className="timer">
          Zeile3
        </div> 
      </div> 
    );
  } 
}
      
export default Timer; 