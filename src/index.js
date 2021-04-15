import React from "react";
import ReactDOM from "react-dom";

import Timer from "./Timer";

ReactDOM.render(<Timer initCalls="10000" doRun={true}/>, document.getElementById("root"));
