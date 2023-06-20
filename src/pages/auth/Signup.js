// ** React Imports
import { useState, Fragment } from "react";

// ** Next Import
import { useForm, Controller } from "react-hook-form";

// ** MUI Components
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled} from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import MuiFormControlLabel from "@mui/material/FormControlLabel";

// ** Icon Imports
import Icon from "../../components/icon/index";

// ** Third Party Imports
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// ** Demo Imports
import { Link } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";

const defaultValues = {
  email: "",
  username: "",
  password: "",
  terms: false,
};


const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  "& .MuiFormControlLabel-label": {
    fontSize: "0.875rem",
    color: theme.palette.text.secondary,
  },
}));

const Signup = () => {
  // ** States
  const [showPassword, setShowPassword] = useState(false);


  const schema = yup.object().shape({
    password: yup.string().min(5).required(),
    username: yup.string().min(3).required(),
    email: yup.string().email().required(),
    terms: yup
      .bool()
      .oneOf([true], "You must accept the privacy policy & terms"),
  });

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { email, username, password } = data;
    // register({ email, username, password }, (err) => {
    //   if (err.email) {
    //     setError("email", {
    //       type: "manual",
    //       message: err.email,
    //     });
    //   }
    //   if (err.username) {
    //     setError("username", {
    //       type: "manual",
    //       message: err.username,
    //     });
    //   }
    // });
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
                    <h3>Sign up</h3>
                    <form
                      noValidate
                      autoComplete="off"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <FormControl fullWidth sx={{ mb: 4 }}>
                        <Controller
                          name="username"
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { value, onChange, onBlur } }) => (
                            <TextField
                              autoFocus
                              value={value}
                              onBlur={onBlur}
                              label="Username"
                              onChange={onChange}
                              placeholder="johndoe"
                              error={Boolean(errors.username)}
                            />
                          )}
                        />
                        {errors.username && (
                          <FormHelperText sx={{ color: "error.main" }}>
                            {errors.username.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                      <FormControl fullWidth sx={{ mb: 4 }}>
                        <Controller
                          name="email"
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { value, onChange, onBlur } }) => (
                            <TextField
                              value={value}
                              label="Email"
                              onBlur={onBlur}
                              onChange={onChange}
                              error={Boolean(errors.email)}
                              placeholder="user@email.com"
                            />
                          )}
                        />
                        {errors.email && (
                          <FormHelperText sx={{ color: "error.main" }}>
                            {errors.email.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                      <FormControl fullWidth sx={{ mb: 4 }}>
                        <InputLabel
                          htmlFor="auth-login-v2-password"
                          error={Boolean(errors.password)}
                        >
                          Password
                        </InputLabel>
                        <Controller
                          name="password"
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { value, onChange, onBlur } }) => (
                            <OutlinedInput
                              value={value}
                              label="Password"
                              onBlur={onBlur}
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
                                    />
                                  </IconButton>
                                </InputAdornment>
                              }
                            />
                          )}
                        />
                        {errors.password && (
                          <FormHelperText sx={{ color: "error.main" }}>
                            {errors.password.message}
                          </FormHelperText>
                        )}
                      </FormControl>

                      <FormControl error={Boolean(errors.terms)}>
                        <Controller
                          name="terms"
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { value, onChange } }) => {
                            return (
                              <FormControlLabel
                                sx={{
                                  ...(errors.terms
                                    ? { color: "error.main" }
                                    : null),
                                  "& .MuiFormControlLabel-label": {
                                    fontSize: "0.875rem",
                                  },
                                }}
                                control={
                                  <Checkbox
                                    checked={value}
                                    onChange={onChange}
                                    sx={
                                      errors.terms
                                        ? { color: "error.main" }
                                        : null
                                    }
                                  />
                                }
                                label={
                                  <Fragment>
                                    <Typography
                                      variant="body2"
                                      component="span"
                                      sx={{
                                        color: errors.terms ? "error.main" : "",
                                      }}
                                    >
                                      I agree to{" "}
                                    </Typography>
                                    <Typography
                                      to="/privacy-policy"
                                      component={Link}
                                      sx={{
                                        color: "primary.main",
                                        textDecoration: "none",
                                      }}
                                    >
                                      privacy policy & terms
                                    </Typography>
                                  </Fragment>
                                }
                              />
                            );
                          }}
                        />
                        {errors.terms && (
                          <FormHelperText sx={{ mt: 0, color: "error.main" }}>
                            {errors.terms.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                      <Button
                        className="login-btn"
                        size="large"
                        type="submit"
                        variant="contained"
                        sx={{ mb: 2 }}
                      >
                        Sign up
                      </Button>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          flexWrap: "wrap",
                          justifyContent: "center",
                        }}
                      >
                        <Typography sx={{ mr: 2, color: "text.secondary" }}>
                          Already have an account?
                        </Typography>
                        <Typography
                          to="/login"
                          component={Link}
                          sx={{ color: "primary.main", textDecoration: "none" }}
                        >
                          Sign in instead
                        </Typography>
                      </Box>
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

export default Signup;
