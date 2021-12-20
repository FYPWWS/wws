
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";


import "./index.css";
import App from "./App";

<script src={"https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GOOLE_MAPS_API_KEY}></script>

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
 