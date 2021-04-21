import React, { Component } from"react";
//import AddButton from './AddButton.js';
import './Timer.css';

class Timer extends Component {
  
  // add = (i) => { // F. 99, mit Updater-Funktion F.87 (Aufgabe 6)
  //   this.setState((state) => ({ count: state.count + i}));
  // }

  // add = (i) => { // F. 99, ohne Updater-Funktion (Aufgabe 5)
  //   this.setState({ count: this.state.count + i});
  // }

  state = {
    run: this.props.doRun,
    calls: this.props.initCalls
  }

  update = (state) => {
    this.setState 
  }

  componentDidMount() {
    //alert("phase: componentDidMount");
    setInterval( function(){this.setState(
            {calls: this.state.calls - 1 })}.bind(this) , 100);
   }

  getDateAsString() { 
      let d = new Date(); 
      let str = d.getHours() + ":" + d.getMinutes() + ":"
                                  + d.getSeconds(); 
      return str;     
  }

  render() { // F. 99
    
    return (
      <div>
        <div className="timer">
          {this.getDateAsString()}
        </div>
        <div className="timer">
          {this.state.calls}
        </div> 
        <div className="timer">
          {this.state.run ? 'ON' : 'OFF'}
        </div> 
      </div> 
    );
  } 
}
      
export default Timer; 