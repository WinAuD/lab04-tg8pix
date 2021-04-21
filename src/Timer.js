import React, { Component } from"react";
//import AddButton from './AddButton.js';
import './Timer.css';

class Timer extends Component {

  state = {
    run: this.props.doRun,
    calls: this.props.initCalls
  }

  update = (state) => {
    if (this.state.run)
      return {calls: state.calls -1}
    else
      return {} 
  }

  componentDidMount() {
    //alert("phase: componentDidMount");
    // setInterval( function(){this.setState(
    //         {calls: this.state.calls - 1 })}.bind(this) , 100);
    setInterval(() => this.setState(this.update), 100);
   }

  static getDerivedStateFromProps(props, state) {
    //alert("phase: getDerivedStateFromProps");
    if (state.run != props.doRun) {
      return {
        run: props.doRun,
      }
    } else
    // Return null if the state hasn't changed
    return null;
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