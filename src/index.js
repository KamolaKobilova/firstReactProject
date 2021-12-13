import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Header from "./Header";
import FunctionaComponents from "./FunctionalComponents";

// import Gallery from "./Gallery"
import Image from "./Image";


ReactDOM.render(
  <main>
    <Header />

    <FunctionaComponents />
    {/* <Gallery /> */}
  
    <Image/>

  </main>,

  document.getElementById("root")
);

reportWebVitals();
