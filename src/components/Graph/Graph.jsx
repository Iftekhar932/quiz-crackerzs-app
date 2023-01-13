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
  console.log("✨ 🌟  Graph  quizData", quizData);
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 600, pv: 2423, amt: 2500 },
    { name: "Page B", uv: 600, pv: 2423, amt: 2500 },
    { name: "Page B", uv: 600, pv: 2423, amt: 2500 },
  ];
  return (
    <BarChart width={730} height={250} data={quizData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
};

export default Graph;
