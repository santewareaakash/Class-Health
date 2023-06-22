import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../StyleSheets/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { logout } from "../../../redux/slice/authSlice";

const NavBar = () => {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

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
              {isLoggedIn ? (
                <Button className="buttonEarlyAccess" onClick={logoutHandler}>
                  Logout
                </Button>
              ) : (
                <Link className="buttonEarlyAccess" to="/login">
                  Sign In
                </Link>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
