import React from "react";
import "../StyleSheets/Footer.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
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
