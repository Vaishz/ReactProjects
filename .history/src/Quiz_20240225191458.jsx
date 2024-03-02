import { useState, useEffect } from "react";
import QuestionsData from "./QuestionsDataset";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(QuestionsData[index]);
  const [points, setPoints] = useState(0);

  const handleOnNextClick = () => {
    setIndex(index + 1);
    setQuestion(QuestionsData[index + 1]);
  };

  const checkAnswer = (e, correctOption) => {
    let selectedOption = e.target.textContent;
    console.log(question.correctOption);
    if (selectedOption == correctOption) {
      setPoints((prevPoints) => prevPoints + 1);
      alert("Correct Answer!");
    } else {
      alert("Incorrect :(");
    }
  };

  useEffect(() => {
    console.log("Updated points:", points);
  }, [points]);

  return (
    <>
      <div className="question-card">
        <h2>{question.question}</h2>
        <div className="options">
          <ul>
            <li onClick={(e) => checkAnswer(e, question.options.option1)}>
              {question.options.option1}
            </li>
            <li onClick={(e) => checkAnswer(e, question.options.option2)}>
              {question.options.option2}
            </li>
            <li onClick={(e) => checkAnswer(e, question.options.option3)}>
              {question.options.option3}
            </li>
            <li onClick={(e) => checkAnswer(e, question.options.option4)}>
              {question.options.option4}
            </li>
          </ul>
        </div>
        <button onClick={handleOnNextClick}>Next</button>
      </div>
    </>
  );
};

export default Quiz;
