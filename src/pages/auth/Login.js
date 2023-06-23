import React, { useState } from "react";

import { useForm, Controller, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/validationSchema/validation";

import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./Login.css";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, userLogin } from "../../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "../admin/AdminDashboard";
import StaffDashboard from "../Staff/StaffDashboard";

const defaultValues = {
  password: "",
  email: "",
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleShowpassword = () => {
    setShowPassword((prev) => !prev);
  };

  const {
    control,
    setError,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("data5654", data);
    const params = {
      email: data?.email,
      password: data?.password,
      token: "4866464sdgd",
      refreshToken: "gsdf56g4df56g4dgf",
      user: { userName: "Aakash", roles: ["STAFF"] },
    };
    dispatch(login(params));

    navigate("/staff", <StaffDashboard />);
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
                    <h3>Sign in</h3>
                    <Form onSubmit={handleSubmit(onSubmit)}>
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
                      <Form.Group className="mb-3" controlId="old_password">
                        <Form.Label>Password*</Form.Label>
                        <InputGroup className="mb-3">
                          <Form.Control
                            type={showPassword ? "text" : "password"}
                            {...register("password", {
                              required: "Please enter password",
                            })}
                          />

                          <InputGroup.Text onClick={toggleShowpassword}>
                            {showPassword ? (
                              <i class="fa fa-eye-slash"></i>
                            ) : (
                              <i class="fa fa-eye"></i>
                            )}
                          </InputGroup.Text>
                        </InputGroup>
                        {errors.password && (
                          <Form.Text className="text-danger">
                            {errors.password.message}
                          </Form.Text>
                        )}
                      </Form.Group>
                      <Form.Group controlId="rememberMe">
                        <Form.Check
                          type="checkbox"
                          label="Remember Me"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        {errors.terms && (
                          <Form.Text className="text-danger">
                            {errors.terms.message}
                          </Form.Text>
                        )}
                      </Form.Group>

                      <div>
                        <button className="login-btn w-100 m-0">Submit</button>
                      </div>
                      <div className="text-center mt-3">
                        <Link to="/forgot-password">Forgot password?</Link>
                      </div>
                      <div className="text-center mt-2">
                        <p>
                          Don't have an account?{" "}
                          <Link to="signup">Register with us</Link>
                        </p>
                      </div>
                    </Form>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="text-center response">
                    <img
                      src='/public/assets/images/login.jpg'
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

export default Login;
