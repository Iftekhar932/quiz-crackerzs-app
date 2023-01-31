import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";
import Quizzes from "./components/Quizzes/Quizzes";
import Statistics from "./components/Statistics/Statistics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "/topics",
          element: <Home></Home>,
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "*",
          element: <NotFound></NotFound>,
        },
      ],
    },
    {
      path: "/quizzes/:quizID",
      loader: async ({ params }) =>
        fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`),
      element: <Quizzes />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
