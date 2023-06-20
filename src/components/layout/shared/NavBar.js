import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../StyleSheets/Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {

    const handleClicktoTop = () => {
      window.scrollTo(0, 0);
    };

  return (
    <Navbar expand="lg" style={{ padding: 0 }}>
      <Container>
        <Link to="/">
          <img
            src="/assets/images/logo.png"
            className="img-fluid navBarLogo"
            alt="logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="buttonContainer d-flex gap-2">
              <Link
                className="buttonEarlyAccess"
                to="/"
                onClick={handleClicktoTop}
              >
                Get Early Access
              </Link>
              {/* <a className="buttonJoinUs" href="mailto:classhealth500@gmail.com">Join Us</a> */}
              <Link className="buttonEarlyAccess" to="/login">
                Sign In
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
