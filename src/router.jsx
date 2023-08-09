import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <MainLayout />,
    children: [
        { path: "/", element: <HomePage /> },
        { path: "/index", element: <HomePage /> },
        { path: "/homePage", element: <HomePage /> },
        { path: "/singin", element: <SignIn /> },
        { path: "/singup", element: <SignUp /> },
        { path: "/cities", element: <Cities /> },
        { path: "/city/:city_id", element: <CityDetail /> },
        { path: "/*", element: <NotFound /> }
    ],
  },
]);

export default router;
