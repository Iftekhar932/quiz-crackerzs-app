import React from "react";

const About = () => {
  return (
    <div className=" w-9/12 mx-auto">
      <div className="mt-12 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              What is the main purpose of a quiz?
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            A quiz is a quick and informal assessment of student knowledge.
            Quizzes are often used in North American higher education
            environments to briefly test a students' level of comprehension
            regarding course material, providing teachers with insights into
            student progress and any existing knowledge gaps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
