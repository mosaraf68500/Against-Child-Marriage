import { createBrowserRouter } from "react-router"; 
import Root from "../Layout/Root/Root";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/About/About";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Resources from "../pages/Resources/Resources";
import Blogs from "../pages/Blogs/Blogs";


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
      },
      {
        path:"contact",
        Component:Contact
      },
      {
        path:"resources",
        Component:Resources
      },
      {
        path:"blogs",
        Component:Blogs
      }
     
    ],
  },
]);
