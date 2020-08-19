import React from 'react';
import './App.css';

const API_URL = 'https://opentdb.com/api.php?amount=10&category=31'

function App() {
  return (
  <div className="container">
    <div className="bg-yellow-200  text-blue-500 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl">
      question here which will a bit longer than just question here
      </h2>
    </div>
    <div className="flex flex-wrap justify-evenly mt-4">
      <button className="mt-1 bg-yellow-200 w-2/5 p-4 text-blue-500 font-semibold rounded-lg shadow-md">Answer1</button>
      <button className="mt-1 bg-yellow-200 w-2/5 p-4 text-blue-500 font-semibold rounded-lg shadow-md">Answer2</button>
      <button className="mt-1 bg-yellow-200 w-2/5 p-4 text-blue-500 font-semibold rounded-lg shadow-md">Answer3</button>
      <button className="mt-1 bg-yellow-200 w-2/5 p-4 text-blue-500 font-semibold rounded-lg shadow-md">Answer4</button>
    </div>
  </div>)
}

export default App;
