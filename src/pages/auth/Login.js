import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/validationSchema/validation";
import Icon from "../../components/icon/index";
import { Col, Container, Row } from "react-bootstrap";
import "./Login.css";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const defaultValues = {
  password: "",
  email: "",
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
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
                    <h3>Sign in</h3>
                    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                      <FormControl fullWidth sx={{ mb: 3 }}>
                        <Controller
                          name="email"
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { value, onChange, onBlur } }) => (
                            <TextField
                              autoFocus
                              label="Email*"
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
                      <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel
                          htmlFor="auth-login-v2-password"
                          error={Boolean(errors.password)}
                        >
                          Password*
                        </InputLabel>
                        <Controller
                          name="password"
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { value, onChange, onBlur } }) => (
                            <OutlinedInput
                              value={value}
                              onBlur={onBlur}
                              label="Password*"
                              onChange={onChange}
                              id="auth-login-v2-password"
                              error={Boolean(errors.password)}
                              type={showPassword ? "text" : "password"}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    edge="end"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() =>
                                      setShowPassword(!showPassword)
                                    }
                                  >
                                    <Icon
                                      icon={
                                        showPassword
                                          ? "mdi:eye-outline"
                                          : "mdi:eye-off-outline"
                                      }
                                      fontSize={20}
                                    />
                                  </IconButton>
                                </InputAdornment>
                              }
                            />
                          )}
                        />
                        {errors.password && (
                          <FormHelperText sx={{ color: "error.main" }} id="">
                            {errors.password.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                      <Box
                        sx={{
                          mb: 4,
                          display: "flex",
                          alignItems: "center",
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                        }}
                      >
                        <FormControlLabel
                          label="Remember Me"
                          control={
                            <Checkbox
                              checked={rememberMe}
                              onChange={(e) => setRememberMe(e.target.checked)}
                            />
                          }
                        />
                        <Typography
                          variant="body2"
                          component={Link}
                          to="/forgot-password"
                          sx={{ color: "primary.main", textDecoration: "none" }}
                        >
                          Forgot Password?
                        </Typography>
                      </Box>
                      <Button
                        className="login-btn"
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        // sx={{ mb: 7 }}
                      >
                        Login
                      </Button>
                      {/* <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ mr: 2, color: 'text.secondary' }}>New on our platform?</Typography>
                <Typography href='/register' component={Link} sx={{ color: 'primary.main', textDecoration: 'none' }}>
                  Create an account
                </Typography>
              </Box> */}
                      {/*  <Divider
                sx={{
                  '& .MuiDivider-wrapper': { px: 4 },
                  mt: theme => `${theme.spacing(5)} !important`,
                  mb: theme => `${theme.spacing(7.5)} !important`
                }}
              >
                or
              </Divider>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconButton href='/' component={Link} sx={{ color: '#497ce2' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:facebook' />
                </IconButton>
                <IconButton href='/' component={Link} sx={{ color: '#1da1f2' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:twitter' />
                </IconButton>
                <IconButton
                  href='/'
                  component={Link}
                  onClick={e => e.preventDefault()}
                  sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : 'grey.300') }}
                >
                  <Icon icon='mdi:github' />
                </IconButton>
                <IconButton href='/' component={Link} sx={{ color: '#db4437' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:google' />
                </IconButton>
              </Box> */}
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
  );
};

export default Login;
