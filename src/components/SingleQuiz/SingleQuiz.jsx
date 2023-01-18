import React, { useState } from "react";

const SingleQuiz = ({ quiz }) => {
  const [isTrue, setIsTrue] = useState(false);
  const { question, correctAnswer, options } = quiz;

  // answer validation and count correct answers
  let correctAnswerCount = 0;
  const answerCollection = (e, index) => {
    console.log(e, index);
  };

  const validateOnSubmit = (e) => {
    const answerMatch = e.currentTarget.value == correctAnswer ? true : false;

    correctAnswerCount = answerMatch
      ? correctAnswerCount + 1
      : correctAnswerCount;
    console.log(answerMatch, correctAnswerCount);
  };

  return (
    <div className="w-9/12 mx-auto mb-12">
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
            className="dark:bg-gray-300 rounded-xl"
          />
        </span>
        <span
          className={`bg-green-200 shadow-lg shadow-green-200 duration-500 ${
            isTrue ? "opacity-100" : "opacity-0"
          }`}
        >
          {correctAnswer}
        </span>
      </h3>
      <ul
        onSubmit={validateOnSubmit}
        className="shadow-md  items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        {options.map((option, index) => {
          return (
            <li
              key={index}
              className=" w-full  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 "
            >
              <div className="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value={option}
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onClick={(e) => answerCollection(e, index)}
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
        {/*  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="horizontal-list-radio-id"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="horizontal-list-radio-id"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              State ID
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="horizontal-list-radio-millitary"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="horizontal-list-radio-millitary"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              US Millitary
            </label>
          </div>
        </li>
        <li className="w-full dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="horizontal-list-radio-passport"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="horizontal-list-radio-passport"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              US Passport
            </label>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default SingleQuiz;
