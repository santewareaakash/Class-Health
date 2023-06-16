import React from "react";
import "../StyleSheets/Footer.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="footer-sec">
        <Container>
          <Row>
            <Col md="4" sm="6">
              <div className="footer-img">
                <img
                  src="assets/images/logo.png"
                  className="img-fluid"
                  alt="teaching"
                />
              </div>
              <div className="footer-contact">
                <i className="fa fa-phone"></i>
                <div>
                  <h3>Contact Us</h3>
                  <p>+91-7892854382</p>
                </div>
              </div>
              <div className="footer-contact">
                <i className="fa fa-envelope"></i>
                <div>
                  <h3>Email Address</h3>
                  <a href="mailto:classhealth500@gmail.com">
                    classhealth500@gmail.com
                  </a>
                </div>
              </div>
              <div className="footer-contact">
                <i className="fa fa-globe" aria-hidden="true"></i>
                <div>
                  <p>www.classhealth.in</p>
                </div>
                <br></br>
              </div>
            </Col>
            <Col md="4" sm="6">
              <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </Col>
            <Col md="4" sm="6">
              <div className="footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>Student Health Record System</li>
                  <li>Athletic Program Management</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyright-sec">
        <Container>
          <Row className="align-items-center">
            <Col md="6">
              <p> © 2021 Class Health, Inc. All Rights Reserved.</p>
            </Col>
            <Col md="6" >
              <div className="connect-links">
                <ul>
                  <li>
                    <a href="http://twitter.com" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://linkedin.com" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
