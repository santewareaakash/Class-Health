import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/layout/shared/Layout";
import "./Homepage.css";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ModalComponent from "../../components/layout/shared/ModalComponent";
import { ContactUs } from "../../components/layout/shared/Contact";

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  const emailChangeHandler = (e) => {
    setError(false);
    setEmail(e.target.value);
  };
  const inputRef = useRef();

  const handleModalShow = () => {
    const emailRegex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (email.trim().length === 0 || !emailRegex.test(email)) {
      setError(true);
    } else {
      setError(false);
      setShowModal(true);
    }
  };
  const handleModalClose = () => {
    setShowModal(false);
    setEmail("");
  };

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

  const particlesInit = async (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <Layout>
      <div className="section-track-health" id="first-section">
        <div>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              fullScreen: {
                enable: false,
                zIndex: 1,
              },
              particles: {
                number: {
                  value: 60,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: "#379f00",
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                  },
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 5,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 10,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#379f00",
                  opacity: 0.2,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "grab",
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 140,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 30,
                    duration: 2,
                    opacity: 7,
                    speed: 3,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
              background: {
                color: "#fdbf13",
                image: "",
                position: "50% 50%",
                repeat: "no-repeat",
                size: "cover",
              },
            }}
          />
        </div>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="section-first-inputContainer">
                <h1 className="title">Track Your Health</h1>
                <p className="info">
                  THE MOST INNOVATIVE WAY FOR SCHOOLS & COLLEGES TO COLLECT,
                  TRACK, SHARE AND MANAGE STUDENT HEALTH INFORMATION
                </p>

                <InputGroup className="emailInput mb-3">
                  <Form.Control
                    placeholder="Your Email*"
                    aria-label="Email"
                    id="email"
                    type="email"
                    value={email}
                    onChange={emailChangeHandler}
                    ref={inputRef}
                  />
                  <InputGroup.Text id="basic-addon1">
                    <Button onClick={handleModalShow}>Connect Now</Button>
                  </InputGroup.Text>
                </InputGroup>
                {error && (
                  <p style={{ color: "red" }}>Please enter correct email </p>
                )}
                <a
                  href="#"
                  onClick={() => {
                    inputRef.current.focus();
                  }}
                >
                  Click here to fill the details
                </a>
              </div>
            </Col>
            <Col md={5} className="offset-md-1">
              <div className="section-first-imageContainer position-relative text-center">
                <img
                  src="/assets/images/nurse-3.png"
                  alt="backgroundImage"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-second">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <ul className="mission-box">
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
                  <Button
                    className="common-button"
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    Contact US
                  </Button>
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
          <i className="fas fa-arrow-up"></i>
        </Button>
      </div>

      <ModalComponent show={showModal} handleClose={handleModalClose}>
        <ContactUs handleClose={handleModalClose} email={email} />
      </ModalComponent>
    </Layout>
  );
};

export default Homepage;
