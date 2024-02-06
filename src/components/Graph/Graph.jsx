import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Graph = ({ quizData }) => {
  const data = quizData.data;

  return (
    <div className="mx-auto mt-12 w-1/3">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={{ stroke: "red", strokeWidth: 2 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
