import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/Carter_One/CarterOne-Regular.ttf";
import "./fonts/Courier_Prime/CourierPrime-Bold.ttf";
import "./fonts/Courier_Prime/CourierPrime-BoldItalic.ttf";
import "./fonts/Courier_Prime/CourierPrime-Italic.ttf";
import "./fonts/Courier_Prime/CourierPrime-Regular.ttf";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
