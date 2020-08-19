import React, { useState, useEffect } from "react";
import "./App.css";
import Questionaire from "./components/Questionaire"

const API_URL = "https://opentdb.com/api.php?amount=10&category=31&type=multiple";


function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState()

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
        setCurrentQuestion(data.results[0])
      });
  }, []);

  const handleAnswer = (answer) => {
    //todo
  }

  return questions.length > 0 ? (
    <div className="container">
      {currentQuestion && (
        <Questionaire data={currentQuestion} handleAnswer={handleAnswer} className />
      )}
    </div>
  ) : (
      <h1>Question is loading! Wait a sec !</h1>
    );
}

export default App;
