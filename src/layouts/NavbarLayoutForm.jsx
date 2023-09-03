
import NavBar from "../components/NavBar";

import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function NavbarLayout() {
  return (
    <div>
        <div className="father-page">

        <NavBar />

        <Outlet />
        </div>

        <div className="padre-footer">
        <Footer />
        </div>
    </div>
  )
}
