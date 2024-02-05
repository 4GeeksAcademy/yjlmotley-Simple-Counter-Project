//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App.jsx";
import "../styles/index.css";


ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
//render your react application
// ReactDOM.render(<App />, document.querySelector("#app"));