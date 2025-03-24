import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ResultBox from "../ResultBox/ResultBox";
import SingleQuiz from "../SingleQuiz/SingleQuiz";
import Header from "../Header/Header.jsx";

const Quizzes = () => {
  const data = useLoaderData();
  const [answers, setAnswers] = useState([]); // here "answers" is referring to "options to choose from"
  const [correctAnswerDisplay, setCorrectAnswerDisplay] = useState(false); // if set to true correct answer is displayed

  return (
    <div>
      <Header />
      <ResultBox
        correctAnswerDisplay={correctAnswerDisplay}
        setCorrectAnswerDisplay={setCorrectAnswerDisplay}
        answers={answers}
        setAnswers={setAnswers}
      ></ResultBox>
      {data.data.questions.map((quiz, index) => (
        <SingleQuiz
          answers={answers}
          setAnswers={setAnswers}
          setCorrectAnswerDisplay={setCorrectAnswerDisplay}
          quiz={quiz}
          key={index}
        ></SingleQuiz>
      ))}
      <button
        type="submit"
        className="mx-auto block bg-purple-500 text-white text-xl font-bold  p-4 px-8 my-4 rounded dark:bg-purple-900 dark:text-purple-300"
        onClick={() => {
          setCorrectAnswerDisplay(true); // display the box containing correct answers count
          window.scrollTo(0, -document.body.scrollHeight); // scroll to the top of the page
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Quizzes;
