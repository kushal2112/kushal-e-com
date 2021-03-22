import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';

// const app = (

//             <App />

// );

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
