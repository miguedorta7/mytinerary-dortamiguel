import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import SignIn from "./pages/SignIn";
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import NotFound from "./pages/NotFound";
/* import Form from "./pages/Form"; */
import NavbarLayoutForm from "./layouts/NavbarLayoutForm";
import NavbarSigns from "./layouts/NavbarSigns";
import SignUp from "./pages/SignUp";
import Activities from "./components/Activities";



const router = createBrowserRouter([
  {
    path: "/", 
    element: <MainLayout />,
    children: [
        { path: "/", element: <HomePage /> },
        { path: "/index", element: <HomePage /> },
        { path: "/homePage", element: <HomePage /> },
        { path: "/cities", element: <Cities /> },
        { path: "/city/:_id", element: <CityDetail /> },

        { path: "/activities/:itinerary_id", element: <Activities /> },

        { path: "/*", element: <NotFound /> }
     
    ],
  },
  {
    path: "/", 
    element: <NavbarLayoutForm/>,
    children: [

    /*   { path: "/form", element: <Form /> }, */
      { path: "/signup", element: <SignUp/> },

    ]
  }, 
  {
    path: "/", 
    element: <NavbarSigns/>,
    children: [
      { path: "/signin", element: <SignIn /> },


    ]
  } 
]);

export default router;
