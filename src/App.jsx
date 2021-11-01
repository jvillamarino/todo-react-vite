import React from "react";
import "./App.css";
import { CardComponent } from "./Components";

function App() {
  return (
    <div className="flex flex-auto justify-center items-center">
      <div className="container-grid">
        <CardComponent title="01"></CardComponent>
        <CardComponent title="02"></CardComponent>
        <CardComponent title="03"></CardComponent>
      </div>
    </div>
  );
}

export default App;
