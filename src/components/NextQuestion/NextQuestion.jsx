import React, { Component, useState } from "react";

function NextQuestion(props) {
  const { question } = props;
  return <button className="question">Next question</button>;
}

export default NextQuestion;
