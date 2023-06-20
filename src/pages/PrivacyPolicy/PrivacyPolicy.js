import React from "react";
import Layout from "../../components/layout/shared/Layout";
import { Col, Container, Row } from "react-bootstrap";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="tnC-section">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={12} className="p-0">
              <div className="header-background">
                <h3>Privacy Policy</h3>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col md={10}>
              <div className="content-1">
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis eius nesciunt et tempora accusamus, eligendi
                  similique harum expedita cumque magni officiis ipsum iusto hic
                  deleniti temporibus ab aliquam maiores laudantium? Quisquam
                  blanditiis aliquam quam voluptatibus fuga voluptates ad
                  molestiae labore, numquam sapiente cumque saepe ducimus odio
                  vel quos ex non?
                </p>
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis eius nesciunt et tempora accusamus, eligendi
                  similique harum expedita cumque magni officiis ipsum iusto hic
                  deleniti temporibus ab aliquam maiores laudantium? Quisquam
                  blanditiis aliquam quam voluptatibus fuga voluptates ad
                  molestiae labore, numquam sapiente cumque saepe ducimus odio
                  vel quos ex non?
                </p>
                <h4>Lorem Ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis eius nesciunt et tempora accusamus, eligendi
                  similique harum expedita cumque magni officiis ipsum iusto hic
                  deleniti temporibus ab aliquam maiores laudantium? Quisquam
                  blanditiis aliquam quam voluptatibus fuga voluptates ad
                  molestiae labore, numquam sapiente cumque saepe ducimus odio
                  vel quos ex non?
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
