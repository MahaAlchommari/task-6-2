import "./Nav.css";
import img1 from "./../../assets/img/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import NavT from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Nav = () => {
  return (
    <Navbar expand="lg" className=" position-fixed w-100 bg-light ma-nav">
      <Container>
        <Navbar href="#">
          <img src={img1} alt="logo" />
        </Navbar>
        <NavT className=" d-flex align-items-center text-dark fw-bold">
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavT className="links text-danger">Home</NavT>
            <NavDropdown title="Collection" className=" text-dark">
              <NavDropdown.Item href="#" className="links">
                Action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" className="links">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" className="links">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" className="links">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavT className="links">Android</NavT>
            <NavT className="links">Shop</NavT>
            <NavT className="links"> Android</NavT>
            <NavT className="links"> Accessiorit</NavT>
            <NavT className="links"> Memory&Storage</NavT>
            <NavDropdown title="Page" id="basic-nav-dropdown" className="links">
              <NavDropdown.Item href="#action/3.1" className="links">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="links">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="links">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="links">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <div className="icons-group">
              <FontAwesomeIcon icon={faUser} className="icons" />
              <FontAwesomeIcon icon={faCartPlus} className="icons" />
              <FontAwesomeIcon icon={faSearch} className="icons" />
            </div>
          </Navbar.Collapse>
        </NavT>
      </Container>
    </Navbar>
  );
};

export default Nav;
