import React, { Component, useState } from "react";
import "../css/App.css";
import Question from "./Question/Question";
import data from "../sample_data.json";

function App() {
  return (
    <div className="app">
      Trivia!
      <Question question="What color is the sky?" />
      <Question question="Uhhhh?" />
    </div>
  );
}

export default App;
