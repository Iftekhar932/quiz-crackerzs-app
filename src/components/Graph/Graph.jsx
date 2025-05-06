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
    <div className="mx-auto mt-12 w-full max-w-3xl p-4 bg-white rounded-xl shadow">
      <h2 className="text-3xl font-bold text-center mb-2">
        Quiz Question Overview
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Total number of questions per quiz topic
      </p>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "#f9fafb", borderColor: "#ddd" }}
            labelStyle={{ fontWeight: "bold" }}
            cursor={{ stroke: "red", strokeWidth: 2 }}
          />
          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            name="Total Questions"
          />
        </LineChart>
      </ResponsiveContainer>

      <span className="text-center block text-gray-700 mt-4">
        Each point represents the total question count for a quiz topic.
      </span>
    </div>
  );
};

export default Graph;
