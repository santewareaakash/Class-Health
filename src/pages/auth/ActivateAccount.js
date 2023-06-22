// ** React Imports
import { useState, Fragment } from "react";

import { useForm, Controller } from "react-hook-form";

// ** Third Party Imports
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router-dom";

import { Container, Form, Row, Col } from "react-bootstrap";
import { activationSchema } from "../../utils/validationSchema/validation";

import "react-datepicker/dist/react-datepicker.css";import moment from "moment";

const defaultValues = {
  activationCode:'',
  email:'',
  temporaryPassword:'',
};

const ActivationPage = () => {

  const {
    handleSubmit,
    watch,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(activationSchema),
  });

  const form = watch();

  console.log("form", form);

  const onSubmit = (data) => {
    const {activationCode,email,temporaryPassword } =
      data;
    console.log("data", data);
  };

  return (
    <div className="login-section">
      <Container>
        <Row className="align-items-center">
          <Col md="10" className="m-auto">
            <div className="shadow-box">
              <Row className="align-items-center">
                <Col md={6}>
                  <div className="login-form">
                    <h3>Register</h3>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group className="mb-3" controlId="activationCode">
                        <Form.Label>Activation Code:</Form.Label>
                        <Form.Control
                          type="text"
                          {...register("activationCode", {
                            required: "Please enter valid code",
                          })}
                        />
                        {errors.activationCode && (
                          <Form.Text className="text-danger">
                            {errors.activationCode.message}
                          </Form.Text>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email:"
                          {...register("email", {
                            required: "Email is Required",
                          })}
                        />
                        {errors.email && (
                          <Form.Text className="text-danger">
                            {errors.email.message}
                          </Form.Text>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="temporaryPassword">
                        <Form.Label>Temporary Password:</Form.Label>
                        <Form.Control
                          type="password"
                          {...register("temporaryPassword", {
                            required: "temporaryPassword is Required",
                          })}
                        />
                        {errors.temporaryPassword && (
                          <Form.Text className="text-danger">
                            {errors.temporaryPassword.message}
                          </Form.Text>
                        )}
                      </Form.Group>

                      <div>
                        <button className="common-btn  m-0">Activate</button>
                      </div>
                    </Form>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="text-center response">
                    <img
                      src="assets/images/login.jpg"
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ActivationPage;
