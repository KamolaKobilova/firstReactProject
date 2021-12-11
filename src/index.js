import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Header from "./Header";
import FunctionaComponents from "./FunctionalComponents";
import Gallery from "./Gallery";
import Body from "./Body";
import Button from "./Button";

ReactDOM.render(
  <main>
    <Header />
    <Gallery />
    <Body />
    <FunctionaComponents />
    <Button />
  </main>,

  document.getElementById("root")
);

reportWebVitals();
