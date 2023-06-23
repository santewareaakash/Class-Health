// ** React Imports
import { useState, useContext } from "react";

// ** Next Import

import { useDispatch, useSelector } from "react-redux";
import { Controller, FormProvider, useForm } from "react-hook-form";

// ** Layout Import
import { yupResolver } from "@hookform/resolvers/yup";

import { resetPasswordSchema } from "../../utils/validationSchema/validation";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";

// ** Styled Components

const PasswordChange = () => {
  const dispatch = useDispatch();

  /* A hook that is used to get the state of the loading from the redux store. */
  const loading = useSelector(({ loading }) => loading.loading);

  // ** States
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const toggleShowOldPassword = () => {
    setShowOldPassword((prev) => !prev);
  };

  const toggleShowNewPassword = () => {
    setShowNewPassword((prev) => !prev);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmNewPassword((prev) => !prev);
  };

  const defaultValues = {
    old_password: "",
    new_password: "",
    confirm_password: "",
  };

  // ** Hooks
  const methods = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
    resolver: yupResolver(resetPasswordSchema),
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
    const { new_password, confirm_password, old_password } = data;
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
                    <h3>Reset Password</h3>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group className="mb-3" controlId="old_password">
                        <Form.Label>Old Password:</Form.Label>
                        <InputGroup className="mb-3">
                          <Form.Control
                            type={showOldPassword ? "text" : "password"}
                            {...register("old_password", {
                              required: "Please enter password",
                            })}
                          />

                          <InputGroup.Text onClick={toggleShowOldPassword}>
                            {showOldPassword ? (
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
                      <Form.Group className="mb-3" controlId="confirm_password">
                        <Form.Label>Confirm Password:</Form.Label>
                        <InputGroup className="mb-3">
                          <Form.Control
                            type={showConfirmNewPassword ? "text" : "password"}
                            {...register("confirm_password", {
                              required: "Please enter valid code",
                            })}
                          />

                          <InputGroup.Text onClick={toggleShowConfirmPassword}>
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
                        <button className="login-btn w-100 mt-4">Submit</button>
                      </div>
                    </Form>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="text-center response">
                    <img
                      src="../../assets/images/login.jpg"
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

export default PasswordChange;
