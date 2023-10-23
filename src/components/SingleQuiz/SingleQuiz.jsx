import React, { useState } from "react";

const SingleQuiz = ({ quiz, answers, setCorrectAnswerDisplay }) => {
  const [isTrue, setIsTrue] = useState(false); // correct answer display
  const { question, correctAnswer, options } = quiz;

  // answer validation and count correct answers
  // let answerCollection = answers;
  const collectAndValidate = (e) => {
    const answer = e.target.value;
    // const collect =
    return answer === correctAnswer && !answers.includes(answer)
      ? answers.push(answer)
      : false;
  };

  return (
    <div className="w-9/12 mx-auto mb-12 ">
      <h3 className="mb-4 mt-12  font-semibold text-gray-900 dark:text-white flex flex-row justify-between">
        {question}{" "}
        <span
          className="hover:bg-cyan-100 rounded-2xl "
          onClick={() => setIsTrue(!isTrue)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
            alt="correct answer"
            height="20"
            width="20"
            className="dark:bg-gray-300 rounded-xl translate-y-1/2"
          />
        </span>
        <span
          className={`bg-green-200 p-2 rounded-sm shadow-lg shadow-green-200 duration-500 ${
            isTrue ? "opacity-100" : "opacity-0 -translate-y-1/2"
          }`}
        >
          {correctAnswer}
        </span>
      </h3>
      <ul className="shadow-md  items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {options.map((option, index) => {
          return (
            <li
              key={index}
              className=" w-full  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 "
            >
              <div
                className="flex items-center pl-3"
                onClick={() => setCorrectAnswerDisplay(false)}
              >
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value={option}
                  name="list-radio"
                  className="accent-green-200 w-4 h-4 text-green-200 bg-gray-100 border-gray-300 focus:ring-green-200 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onClick={collectAndValidate}
                  required
                />
                <label
                  htmlFor="horizontal-list-radio-license"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {option}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SingleQuiz;
