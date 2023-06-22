import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Col,
  Row,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../redux/slice/authSlice";

export default function Header() {
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        dispatch(logout())
    }
  return (
    <>
      <header className="main-header login-header-home">
        <Navbar expand="lg" sticky="top">
          <Container fluid>
            <Row className="w-100 m-auto">
              <Col>
                <div className="d-flex justify-content-between align-items-center">
                  <Navbar.Brand href="/">
                    <img
                      src="assets/images/logo.png"
                      style={{ maxHeight: "70px" }}
                    />
                  </Navbar.Brand>

                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <NavLink to="/admin">
                        <i className="fa fa-th-large"></i> Dashboard
                      </NavLink>
               
                      <NavLink to="/Profile">
                        <i className="fa fa-user"></i> Profile
                      </NavLink>
                  {/*     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                        </NavDropdown> */}

                      <NavLink >
                        <i className="fa fa-sign-out"></i> Logout
                      </NavLink>
                    </Nav>
                  </Navbar.Collapse>

                  <Link to="/" className="ms-auto profile-dropdown">
                    {/* <img src="assets/img/logo.png" /> GTH4536675... */}
                  </Link>
                  <Link to="/" className="border-btn" onClick={logoutHandler}>
                    Logout <i className="fa fa-sign-out"></i>
                  </Link>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
