import React, { useState, useEffect } from "react";
import "./App.css";
import Questionaire from "./components/Questionaire"

const API_URL = "https://opentdb.com/api.php?amount=10&category=31";


function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [gameEnded, setGameEnded] = useState(false)

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  const handleAnswer = (answer) => {
    let newIndex = currentIndex + 1
    setCurrentIndex(newIndex)

    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1)
    }
    if (newIndex >= questions.length) {
      setGameEnded(true)
    }

  }

  return gameEnded ? (
    <div className="bg-yellow-200 text-blue-500 p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl">Your score: {score}</h2>
    </div>
  ) : (questions.length > 0 ? (
    <div className="container">
      <Questionaire data={questions[currentIndex]} handleAnswer={handleAnswer} className />
    </div>
  ) : (
      <h1 className="text-3xl text-white">Question is loading! Wait a sec !</h1>
    ))
}

export default App;
