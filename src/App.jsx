import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
/*  import CarouselPage from "./components/CarouselPage"; */
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </>
  );
}

export default App;
