import React from "react";
import { useLoaderData } from "react-router-dom";
import About from "../About/About";
import Categories from "../Categories/Categories";

const Home = () => {
  const quizzes = useLoaderData();

  return (
    <div>
      <About></About>
      <Categories quizzes={quizzes}></Categories>;
    </div>
  );
};

export default Home;
