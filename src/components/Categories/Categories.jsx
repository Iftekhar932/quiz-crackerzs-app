import React from "react";
import SingleCategoryCard from "../SingleCategoryCard/SingleCategoryCard";

const Categories = ({ quizzes }) => {
  return (
    <div className="grid grid-cols-4 gap-4 w-9/12 mx-auto">
      {quizzes.data.map((quiz) => {
        return <SingleCategoryCard quiz={quiz}></SingleCategoryCard>;
      })}
    </div>
  );
};

export default Categories;
