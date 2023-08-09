import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
/*  import CarouselPage from "./components/CarouselPage"; */
/* import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer"; */
import { RouterProvider } from "react-router-dom";
import router from "./router";
function App() {

  return (

    <RouterProvider router = {router}/>
    
  );
}

export default App;
