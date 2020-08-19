import React, { useState, useEffect } from "react";
import "./App.css";

const API_URL = "https://opentdb.com/api.php?amount=10&category=31";
const answerStyle =
  " bg-yellow-200  p-4 text-blue-500 font-semibold rounded-lg shadow-md";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);
  return questions.length > 0 ? (
    <div className="container">
      <div className="bg-yellow-200  text-blue-500 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl">{questions[0].question}</h2>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <button className={answerStyle}>{questions[0].correct_answer}</button>
        <button className={answerStyle}>
          {questions[0].incorrect_answers[0]}
        </button>
        <button className={answerStyle}>
          {questions[0].incorrect_answers[1]}
        </button>
        <button className={answerStyle}>
          {questions[0].incorrect_answers[2]}
        </button>
      </div>
    </div>
  ) : (
    <h1>Question is loading! Wait a sec !</h1>
  );
}

export default App;
