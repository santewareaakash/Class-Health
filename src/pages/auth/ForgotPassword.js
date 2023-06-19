// ** Next Import
import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";

// ** MUI Components
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

// ** Icon Imports
import Icon from "../../components/icon/index";

// ** Demo Imports
import { FormControl, FormHelperText } from "@mui/material";

import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LinkStyled = styled(Link)(({ theme }) => ({
  display: "flex",
  "& svg": { mr: 1.5 },
  alignItems: "center",
  textDecoration: "none",
  justifyContent: "center",
  color: theme.palette.primary.main,
}));

const ForgotPassword = () => {
  // ** Hooks

  const TypographyStyled = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    letterSpacing: "0.18px",
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down("md")]: { marginTop: theme.spacing(8) },
  }));

  const dispatch = useDispatch();

  const defaultValues = {
    email: "",
  };

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
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
                  <Col md={6}>
                    <div className="login-form">
                      <h3>Forgot Password?</h3>
                      <Box sx={{ mb: 6 }}>
                        {/* <TypographyStyled variant="h5">
                          Forgot Password? 🔒
                        </TypographyStyled> */}
                        <Typography variant="body2">
                          Enter your email and we&prime;ll send you instructions
                          to reset your password
                        </Typography>
                      </Box>
                      <form
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <FormControl fullWidth sx={{ mb: 4 }}>
                          <Controller
                            name="email"
                            control={control}
                            rules={{ required: true }}
                            render={({
                              field: { value, onChange, onBlur },
                            }) => (
                              <TextField
                                autoFocus
                                label="Email"
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
                                error={Boolean(errors.email)}
                              />
                            )}
                          />
                          {errors.email && (
                            <FormHelperText sx={{ color: "error.main" }}>
                              {errors.email.message}
                            </FormHelperText>
                          )}
                        </FormControl>
                        <Button
                          fullWidth
                          className="login-btn"
                          size="large"
                          type="submit"
                          variant="contained"
                          sx={{ mb: 3.25 }}
                        >
                          Send reset link
                        </Button>
                        <Typography
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <LinkStyled to="/login">
                            <Icon icon="mdi:chevron-left" fontSize="2rem" />
                            <span>Back to login</span>
                          </LinkStyled>
                        </Typography>
                      </form>
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
    </>
  );
};

export default ForgotPassword;
