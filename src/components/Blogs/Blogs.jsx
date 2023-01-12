import React from "react";

const Blogs = () => {
  return (
    <div>
      {/* SINGLE BOX START */}
      <div className=" w-9/12 mx-auto">
        <div className="mt-12 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Purpose of react-router?
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              React router is a powerful, fast, efficient JavaScript library
              that's used for creating different routes and switch among them
              without reloading the whole page
            </p>
          </div>
        </div>
      </div>
      {/* SINGLE BOX START */}
      {/* SINGLE BOX START */}
      <div className=" w-9/12 mx-auto">
        <div className="mt-12 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                How does react context work?
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              React context is a way to manage states globally which can also
              bbe used with useState() hook. It is a way to pass data through
              the component tree without the help of props or prop drilling. It
              is works like a state management system
            </p>
          </div>
        </div>
      </div>
      {/* SINGLE BOX START */}
      {/* SINGLE BOX START */}
      <div className=" w-9/12 mx-auto">
        <div className="mt-12 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                What is useRef in React with example?
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              The useRef is a hook that allows to directly create a reference to
              the DOM element in the functional component.The useRef Hook allows
              you to persist values between renders. It can be used to store a
              mutable value that does not cause a re-render when updated. It can
              be used to access a DOM element directly.
            </p>
          </div>
        </div>
      </div>
      {/* SINGLE BOX START */}
    </div>
  );
};

export default Blogs;
