import React from "react";

import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Legend,
  Bar,
} from "recharts";

const Graph = ({ quizData }) => {
  const data = quizData.data.map((quiz) => {
    const data2 = [
      { name: quiz.name, Quizzes: quiz.count, amt: 2400 },
      { name: quiz.name, Quizzes: quiz.count, amt: 2400 },
      { name: quiz.name, Quizzes: quiz.count, amt: 2400 },
      { name: quiz.name, Quizzes: quiz.count, amt: 2400 },
    ];
    return data2;
  });

  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Quizzes" fill="#82ca9d" />
    </BarChart>
  );
};

export default Graph;
