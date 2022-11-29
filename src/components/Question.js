import { cleanup } from "@testing-library/react";
import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  // condtion if time is 0 reset 

  useEffect(()=> {

    if(timeRemaining <=0 ){
      return setTimeRemaining(10)
    } 


    const timerID = setTimeout(()=> {
      setTimeRemaining(timeRemaining -1 )
    },1000)

    return function() {
      clearTimeout(timerID)
    }


  }, [timeRemaining, onAnswered(false)] )

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
