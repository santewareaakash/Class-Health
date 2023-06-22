// ** React Imports
import { useState, Fragment } from "react";

import { useForm, Controller } from "react-hook-form";

// ** Third Party Imports
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router-dom";

import { Container, Form, Row, Col } from "react-bootstrap";
import { registerSchema } from "../../utils/validationSchema/validation";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";


const defaultValues = {
  firstName: "",
  lastName: "",
  date_of_birth: new Date(),
  organization: "",
  mobile: "",
  email: "",
  terms: false,
};

const SignupRequest = () => {
  // ** States


  const {
    handleSubmit,
    watch,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const form = watch()

  console.log("form",form)

  const onSubmit = (data) => {
    const { email, firstName, lastName, date_of_birth, organization, mobile } = data;
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
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>FirstName*</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="FirstName*"
                              {...register("firstName", {
                                required: "First Name is Required",
                              })}
                            />
                            {errors.firstName && (
                              <Form.Text className="text-danger">
                                {errors.firstName.message}
                              </Form.Text>
                            )}
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>LastName*</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="LastName*"
                              {...register("lastName", {
                                required: "lastName is Required",
                              })}
                            />
                            {errors.lastName && (
                              <Form.Text className="text-danger">
                                {errors.lastName.message}
                              </Form.Text>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email*"
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
                      <Form.Group className="mb-3" controlId="dateofbirth">
                        <Form.Label>Date Of Birth*</Form.Label>
                        <Controller
                          control={control}
                          name="date_of_birth"
                          render={({ field }) => (
                            <ReactDatePicker
                              placeholderText={"DD-MM-YYYY"}
                              onChange={(value) =>
                                field.onChange(
                                  moment(value).format("DD-MM-YYYY")
                                )
                              }
                              value={field.value}
                              maxDate={new Date()}
                              isClearable={true}
                              showYearDropdown // year show and scrolldown alos
                              scrollableMonthYearDropdown={true}
                            />
                          )}
                        />
                        {errors.date_of_birth && (
                          <Form.Text className="text-danger">
                            {errors.date_of_birth.message}
                          </Form.Text>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="mobile">
                        <Form.Label>Mobile*</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Mobile*"
                          {...register("mobile", {
                            required: "Mobile number is Required",
                          })}
                        />
                        {errors.mobile && (
                          <Form.Text className="text-danger">
                            {errors.mobile.message}
                          </Form.Text>
                        )}
                      </Form.Group>
                      <Col lg={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Select Organization*</Form.Label>
                          <Form.Select
                            aria-label="Select Organization"
                            {...register("organization", {
                              required: "Please Select Organization",
                            })}
                          >
                            <option value="" disabled>
                              Select Organization
                            </option>
                            <option value="UnionSchool">Union School</option>
                            <option value="ChristSchool">Christ School</option>
                            <option value="Nursing School">
                              Nursing School
                            </option>
                          </Form.Select>
                          {errors.organization && (
                            <Form.Text className="text-danger">
                              {errors.organization.message}
                            </Form.Text>
                          )}
                        </Form.Group>
                      </Col>
                      <Form.Group controlId="formBasicCheckBox">
                        <Form.Check
                          type="checkbox"
                          label="I agree to privacy policy & terms"
                          {...register("terms", {
                            required:
                              "You must accept the privacy policy & terms",
                          })}
                        />
                        {errors.terms && (
                          <Form.Text className="text-danger">
                            {errors.terms.message}
                          </Form.Text>
                        )}
                      </Form.Group>
                      <div>
                        <button className="common-btn  m-0">Submit</button>
                      </div>

                      <div>
                        <h6>Already have an account?</h6>

                        <Link to="/login">
                          <h6>Sign in instead</h6>
                        </Link>
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

export default SignupRequest;
