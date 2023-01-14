import React from "react";
import { useLoaderData } from "react-router-dom";
import Graph from "../Graph/Graph";

const Statistics = () => {
  const quizData = useLoaderData();

  return <div>{/* <Graph quizData={quizData}></Graph> */}</div>;
};

export default Statistics;
