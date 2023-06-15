import React, { useEffect, useRef } from "react";
import Layout from "../../components/layout/shared/Layout";
import "./Homepage.css";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const Homepage = () => {
  const inputRef = useRef();

  const handleClicktoTop = () => {
    window.scrollTo(0, 0);
  };
  const controlScrollButton = () => {
    if (window.scrollY) {
      document.getElementById("scrollButton").classList.remove("hide");
    }
    if (window.scrollY === 0) {
      document.getElementById("scrollButton").classList.add("hide");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlScrollButton);
    return () => {
      window.removeEventListener("scroll", controlScrollButton);
    };
  }, []);

  return (
    <Layout>
      <div className="section-track-health" id="first-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="section-first-inputContainer">
                <h1 className="title">Track Your Health</h1>
                <p className="info">
                  THE MOST INNOVATIVE WAY FOR SCHOOLS & COLLEGES TO COLLECT,
                  TRACK, SHARE AND MANAGE STUDENT HEALTH INFORMATION
                </p>
                <InputGroup className="emailInput mb-3 ">
                  <Form.Control
                    placeholder="Your Email*"
                    aria-label="Email"
                    id="email"
                    ref={inputRef}
                  />
                  <InputGroup.Text id="basic-addon1">
                    <Button>Connect Now</Button>
                  </InputGroup.Text>
                </InputGroup>

                <a href="#"
                  onClick={() => {
                    inputRef.current.focus();
                  }}
                >
                  Click here to fill the details
                </a>
              </div>
            </Col>
            <Col md={5}>
              {/* <div className="section-first-imageContainer">
                <img
                  src="/assets/images/container1.png"
                  alt="backgroundImage"
                />
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-second">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <ul class="mission-box">
                <li>
                  <div>
                    <div>
                      <img
                        src="assets/images/second-1.png"
                        className="img-fluid"
                        alt="icon"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div>
                      <img
                        src="assets/images/second-2.png"
                        className="img-fluid"
                        alt="icon"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div>
                      <img
                        src="assets/images/second-3.png"
                        className="img-fluid"
                        alt="icon"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <div className="section-second-rightContainer">
                <div className="common-heading">Gearing Up For The Future</div>
                <p>
                  We at ClassHealth, through our secure “Students’ health record
                  (SHR)” & “Athletic program management (APM) system” fosters
                  collaborative approach among students, parents, guardians &
                  school nurses/counselors to drive students physical, emotional
                  & psychological wellbeing.
                </p>
                <div className="section-second-contactButtonContainer">
                  <Button className="common-button">Contact US</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-third">
        <Container>
          <Row className="align-items-center">
            <div className="common-heading text-center">
              6 Reasons Why You Need Class Health
            </div>
            <Col md={4}>
              <div className="detail-card">
                <img
                  src="assets/images/card-1.svg"
                  className="img-fluid"
                  alt="icon"
                />
                <h3>01</h3>
                <p>Built exclusively for Schools and Colleges</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="detail-card">
                <img
                  src="assets/images/card-2.svg"
                  className="img-fluid"
                  alt="icon"
                />
                <h3>02</h3>
                <p>Consolidated Student Health Record at Fingertips</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="detail-card">
                <img
                  src="assets/images/card-3.svg"
                  className="img-fluid"
                  alt="icon"
                />
                <div className="detail-card__iconContainer"></div>
                <h3>03</h3>
                <p>
                  Ensure Adherence to Immunisation compliance & Covid Advisory
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="detail-card">
                <img
                  src="assets/images/card-4.svg"
                  className="img-fluid"
                  alt="icon"
                />
                <h3>04</h3>
                <p>
                  Seamless Integration with Ayushman Bharat Digital Mission
                  (ABDM)
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="detail-card">
                <img
                  src="assets/images/card-5.svg"
                  className="img-fluid"
                  alt="icon"
                />
                <h3>05</h3>
                <p>Reduce redundant paperwork year after year for parents</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="detail-card">
                <img
                  src="assets/images/card-6.svg"
                  className="img-fluid"
                  alt="icon"
                />
                <h3>06</h3>
                <p>
                  Easy to share student health record with medical personnel
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="scrollButton">
        <Button onClick={handleClicktoTop} id="topButton">
          <i class="fas fa-arrow-up"></i>
        </Button>
      </div>
    </Layout>
  );
};

export default Homepage;
