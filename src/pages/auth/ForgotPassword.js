import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { emailSchema } from "../../utils/validationSchema/validation";

 const defaultValues = {
   email: "",
 };


const ForgotPassword = () => {
  // ** Hooks

  const dispatch = useDispatch();

 
  const {
    handleSubmit,
    watch,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(emailSchema),
  });

  const onSubmit = (e) => {
    const { email } = e;

    const params = {
      email: email,
    };

    // dispatch(userForgotPassword(params));
  };

  return (
    <>
      <div className="login-section">
        <Container>
          <Row className="align-items-center">
            <Col md="10" className="m-auto">
              <div className="shadow-box">
                <Row className="align-items-center">
                  <h4>Forgot Password? 🔒</h4>
                  <h5>
                    Enter your email and we&prime;ll send you instructions to
                    reset your password
                  </h5>
                  <Col md={6}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
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
                    </Form>
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
    </>
  );
};

export default ForgotPassword;
