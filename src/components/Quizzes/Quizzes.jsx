import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ResultBox from "../ResultBox/ResultBox";
import SingleQuiz from "../SingleQuiz/SingleQuiz";
import Header from "../Header/Header.jsx";

const Quizzes = () => {
  const data = useLoaderData();
  const [answers, setAnswers] = useState([]); //
  const [correctAnswerDisplay, setCorrectAnswerDisplay] = useState(false); //
  return (
    <div>
      <Header />
      <ResultBox
        correctAnswerDisplay={correctAnswerDisplay}
        answers={answers}
      ></ResultBox>
      {data.data.questions.map((quiz, index) => (
        <SingleQuiz
          answers={answers}
          setCorrectAnswerDisplay={setCorrectAnswerDisplay}
          // correctAnswerCount={correctAnswerCount}
          quiz={quiz}
          key={index}
        ></SingleQuiz>
      ))}
      <button
        type="submit"
        className="mx-auto block bg-purple-500 text-white text-xl font-bold  p-4 px-8 my-4 rounded dark:bg-purple-900 dark:text-purple-300"
        onClick={() => setCorrectAnswerDisplay(true)}
      >
        Submit
      </button>
    </div>
  );
};

export default Quizzes;
