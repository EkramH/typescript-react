import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Home from "@/pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
