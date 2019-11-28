import React from "react";
import ReactDOM from "react-dom";
import GradientChart from "./GradientChart";
import { data } from "./data";

function App() {
  return <GradientChart data={data} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
