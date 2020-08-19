import React, {useState, useEffect} from 'react';
import './App.css';

const API_URL = 'https://opentdb.com/api.php?amount=10&category=31'
const answerStyle = " bg-yellow-200  p-4 text-blue-500 font-semibold rounded-lg shadow-md"

function App() {

  const [questions, setQuestion] = useState([])

  useEffect(()=>{

  }, [])
  return (
  <div className="container">
    <div className="bg-yellow-200  text-blue-500 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl">
      question here which will a bit longer than just question here
      </h2>
    </div>
    <div className="grid grid-cols-2 gap-6 mt-6">
      <button className={answerStyle}>Answer1</button>
      <button className={answerStyle}>Answer2</button>
      <button className={answerStyle}>Answer3</button>
      <button className={answerStyle}>Answer4</button>
    </div>
  </div>)
}

export default App;
