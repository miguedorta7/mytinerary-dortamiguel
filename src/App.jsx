import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
/*  import CarouselPage from "./components/CarouselPage"; */
/* import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer"; */
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import store from "./store/store";



function App() {

  return (
    <Provider store={store}>
      <RouterProvider router = {router}/>
    </Provider>
    
  );
}

export default App;
