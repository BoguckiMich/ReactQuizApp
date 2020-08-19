import React from 'react'

// const answerStyle =
//   " bg-yellow-200  p-4 text-blue-500 font-semibold rounded-lg shadow-md";

// const Button = ({ answer, className }) => (
//   <button className={`bg-yellow-200  p-4 text-blue-500 font-semibold rounded-lg shadow-md ${className}`}>{answer}</button>
// )


const Questionaire = ({ handleAnswer, data: { question, correct_answer, incorrect_answers } }) => {
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)

  return (
    <div>
      <div className="bg-yellow-200  text-blue-500 p-8 rounded-lg shadow-lg">
        <h2
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {shuffledAnswers.map((answer) => (
          <button
            className='bg-yellow-200 p-4 text-blue-500 font-semibold rounded-lg shadow-md'
            onClick={() => handleAnswer(answer)}
            dangerouslySetInnerHTML={{ __html: answer }}></button>
        ))}
      </div>
    </div>
  )
}

export default Questionaire;
