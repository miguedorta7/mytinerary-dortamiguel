import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link as Anchor } from "react-router-dom";

export default function NavBar() {
  /*  let data = [
        {href:"#home",title:"Home"},
        {href:"#link",title:"Cities"},
        {href:"#link",title:"Login"},
] */

  return (
    <header>
      <Navbar expand="lg" className="fw-bold">
        <Container>
          

          <Navbar.Brand href="#home">My Tinerary</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {
                <Nav.Link as={Anchor} to={"/homepage"}>Home </Nav.Link>
              }
              {
                <Nav.Link  as={Anchor} to={"/cities"} >Cities </Nav.Link>
              }
              <div className="login-h rounded px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="50"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M13.7813 5C13.7813 6.72589 12.3122 8.125 10.5 8.125C8.68783 8.125 7.21876 6.72589 7.21876 5C7.21876 3.27411 8.68783 1.875 10.5 1.875C12.3122 1.875 13.7813 3.27411 13.7813 5Z"
                    fill="white"
                  />
                  <path
                    d="M3.93851 16.7652C4.00002 13.3641 6.91415 10.625 10.5 10.625C14.086 10.625 17.0001 13.3642 17.0615 16.7654C15.0641 17.6383 12.8419 18.125 10.5003 18.125C8.15851 18.125 5.9361 17.6383 3.93851 16.7652Z"
                    fill="white"
                  />
                </svg>
                {
                  <Nav.Link className=" text-light" href="#link">
                    Login
                  </Nav.Link>
                }
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
