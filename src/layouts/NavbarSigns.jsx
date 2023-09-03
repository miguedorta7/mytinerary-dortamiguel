import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function NavbarSigns() {
  return (
    <div>
        <div className="father-page-sign">
        <NavBar />
        <Outlet />
        </div>
        
        <div className="padre-footer">
        <Footer />
        </div>
    </div>
  )
}
