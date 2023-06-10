import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  
    {
      path: "/login",
      element: <Login></Login>,
    },
]);

export default router;