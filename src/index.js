import React from "react";
import ReactDOM from "react-dom";

//import Timer from "./Timer.js";
import App from "./App.js";

ReactDOM.render(<App/>, document.getElementById("root"));

/* 
Aufgabe 7c)
Es wird nur für den Button ein Zustand genutzt. Der Timer hat keinen Zustand, sondern übernimmt den Zustand von Button mit props.doRun (single source of truth).
 */
