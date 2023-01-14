import React from "react";
import { useLoaderData } from "react-router-dom";

const Quizzes = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>This is quizzes</div>;
};

export default Quizzes;
