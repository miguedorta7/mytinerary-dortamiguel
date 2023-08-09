import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <NavBar />

      <Outlet />

      <div className="padre-footer">
        <Footer />

      </div>
    </div>
  );
}
