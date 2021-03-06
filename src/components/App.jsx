import React, { Component, useState } from "react";
import "../css/App.css";
import Question from "./Question/Question";
import data from "../sample_data.json";
import NextQuestion from "./NextQuestion/NextQuestion";

function App() {
  let questionNum = 0;
  return (
    <div className="app">
      <h1>Trivia!</h1>
      <Question question={data[questionNum].question.text} />
      <NextQuestion />
    </div>
  );
}

export default App;
