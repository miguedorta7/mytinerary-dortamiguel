import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import NavbarWhite from "../components/NavbarWhite";

export default function NavbarSigns() {
  return (
    <div>
        <div className="father-page-sign">
        <NavbarWhite />
        <Outlet />
        </div>
        
        <div className="padre-footer">
        <Footer />
        </div>
    </div>
  )
}
