import React from "react";

import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <></>,
          children: [{}],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

/* 

Get all quiz topics: https://openapi.programming-hero.com/api/quiz

Get topic details by topic id: https://openapi.programming-hero.com/api/quiz/${id}

Example: https://openapi.programming-hero.com/api/quiz/1


1. favicon
2. nav with different name icon
3. below nav there should be some text while in home route  
4. Every topic should have a name, image and button
5. Design has to be different from the one shown
6. If clicked on the right/wrong answer it should be notified.
7. There should be an 'eye' icon, when clicked it'll display the correct answer
8. 404 Route, Blog route with three question answers  which are:

a. Purpose of react-router.(own answer)
b. How does react context work
c. useRef() hook, how does it work.

9. How many questions are there it should be displayed in a chart.





*/
