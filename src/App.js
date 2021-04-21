import React, { Component } from"react";
import './App.css';
import Timer from "./Timer.js";

class App extends Component {

  state = {run: true} 

  click = () => {
    this.setState({run: !this.state.run})
  }

  render() { 
    return (
      <div>
        <Timer initCalls="10000" doRun={this.state.run}/>
        <button className="NiceButton" onClick={this.click}>{String(this.state.run)}</button>
      </div>
    ); 
  }
}
export default App;