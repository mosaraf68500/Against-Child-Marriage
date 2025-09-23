import { createBrowserRouter } from "react-router"; 
import Root from "../Layout/Root/Root";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/About/About";
import About from "../pages/About/About";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component:Home
      },
      {
        path:"about",
        Component:About
      }
     
    ],
  },
]);
