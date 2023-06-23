// ** React Imports
import { useState, useContext } from "react";

// ** Next Import

import { useDispatch, useSelector } from "react-redux";
import { Controller, FormProvider, useForm } from "react-hook-form";

// ** Layout Import
import { yupResolver } from "@hookform/resolvers/yup";

import {
  changePasswordSchema,
  resetPasswordSchema,
} from "../../utils/validationSchema/validation";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";

// ** Styled Components

const PasswordChange = () => {
  const dispatch = useDispatch();

  /* A hook that is used to get the state of the loading from the redux store. */
  const loading = useSelector(({ loading }) => loading.loading);

  // ** States
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const toggleShowNewPassword = () => {
    setShowNewPassword((prev) => !prev);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmNewPassword((prev) => !prev);
  };

  const defaultValues = {
    new_password: "",
    confirm_password: "",
  };

  // ** Hooks
  const methods = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
    resolver: yupResolver(changePasswordSchema),
  });

  const {
    control,
    handleSubmit,
    formState,
    reset,
    watch,
    setValue,
    setError,
    register,
  } = methods;
  const { errors } = formState;

  const form = watch();

  const onSubmit = (data) => {
    const { new_password, confirm_password } = data;
    console.log("data", data);
  };

  return (
    <div className="login-section">
      <Container>
        <Row className="align-items-center">
          <Col md="9" className="m-auto">
            <div className="shadow-box">
              <Row className="align-items-center">
                <Col md={12}>
                  <div className="login-form">
                    <div className="text-center">
                      <h5>Change Temporary Password</h5>
                    </div>
                    <p>
                      Password change: In accordance with the security settings
                      set hence forth by your provider's clinic, you must change
                      your password to continue
                    </p>
                    <p className="head">Reason for change:</p>
                    <p className="mb-4">
                      You have logged in for the first time and the Password
                      provided was temporary. You must change your password
                    </p>
                    <Row className="align-items-end">
                      <Col md="6" className="offset-md-2">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                          <Form.Group className="mb-3" controlId="new_password">
                            <Form.Label>New Password:</Form.Label>
                            <InputGroup className="mb-3">
                              <Form.Control
                                type={showNewPassword ? "text" : "password"}
                                {...register("new_password", {
                                  required: "Please enter valid code",
                                })}
                              />

                              <InputGroup.Text onClick={toggleShowNewPassword}>
                                {showNewPassword ? (
                                  <i class="fa fa-eye-slash"></i>
                                ) : (
                                  <i class="fa fa-eye"></i>
                                )}
                              </InputGroup.Text>
                            </InputGroup>
                            {errors.new_password && (
                              <Form.Text className="text-danger">
                                {errors.new_password.message}
                              </Form.Text>
                            )}
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="confirm_password"
                          >
                            <Form.Label>Confirm Password:</Form.Label>
                            <InputGroup className="mb-3">
                              <Form.Control
                                type={
                                  showConfirmNewPassword ? "text" : "password"
                                }
                                {...register("confirm_password", {
                                  required: "Please enter valid code",
                                })}
                              />

                              <InputGroup.Text
                                onClick={toggleShowConfirmPassword}
                              >
                                {showConfirmNewPassword ? (
                                  <i class="fa fa-eye-slash"></i>
                                ) : (
                                  <i class="fa fa-eye"></i>
                                )}
                              </InputGroup.Text>
                            </InputGroup>
                            {errors.confirm_password && (
                              <Form.Text className="text-danger">
                                {errors.confirm_password.message}
                              </Form.Text>
                            )}
                          </Form.Group>
                          <div>
                            <button className="login-btn   mt-3">
                              Confirm Password
                            </button>
                          </div>
                        </Form>
                      </Col>
                      <Col md="4">
                        <div className="px-3">
                          <p className="head">Password Requirements:</p>
                          <div className="require-password">
                            <i className="fa-duotone fa-badge-check"></i>
                            <Form.Check
                              label="1 Uppercase character"
                              name="group1"
                              checked
                            />
                            <Form.Check
                              label="1 Lowercase character"
                              name="group1"
                              checked
                              disabled
                            />
                            <Form.Check
                              label="1 numeric number"
                              name="group1"
                              checked
                            />
                            <Form.Check
                              label="1 special character"
                              name="group1"
                              disabled
                              checked
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                {/* <Col md={6}>
                  <div className="text-center response">
                    <img
                      src={require("../../assets/images/login.jpg")}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                </Col> */}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PasswordChange;
