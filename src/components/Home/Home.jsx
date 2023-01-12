import React from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";

const Home = () => {
  const quizzes = useLoaderData();

  return (
    <div>
      <Categories quizzes={quizzes}></Categories>;
    </div>
  );
};

export default Home;
