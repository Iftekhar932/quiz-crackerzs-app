import React, { PureComponent } from "react";
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
    <div className="mx-auto mt-12 w-40">
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis datakey="name" />
        <YAxis />
        <Tooltip cursor={{ stroke: "red", strokeWidth: 2 }} label="total" />
      </LineChart>
    </div>
  );
};

export default Graph;
