import NavbarWhite from "../components/NavbarWhite";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function NavbarLayout() {
  return (
    <div>
        <div className="father-page">
        <NavbarWhite />
        <Outlet />
        </div>

        <div className="padre-footer">
        <Footer />
        </div>
    </div>
  )
}
