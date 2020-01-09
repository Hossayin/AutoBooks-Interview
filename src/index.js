import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ActivityPannel from "./ActivityTracker/ActivityPannel";

ReactDOM.render(<ActivityPannel />, document.getElementById("root"));

serviceWorker.unregister();
