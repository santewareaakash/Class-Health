// ** React Imports
import { useState, useContext } from "react";

// ** Next Import

import { useDispatch, useSelector } from "react-redux";
import { Controller, FormProvider, useForm } from "react-hook-form";

// ** MUI Components
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

// ** Icon Imports
import Icon from "../../components/icon/index";

// ** Layout Import
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Card,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
} from "@mui/material";
import ConfirmAlert from "../../components/Alert/CommonDialouge";
import { resetPasswordSchema } from "../../utils/validationSchema/validation";
import { Col, Container, Row } from "react-bootstrap";

// ** Styled Components

const ResetPassword = () => {
  const dispatch = useDispatch();

  const [modal, openModal] = useState({
    isOpen: false,
    title: "",
    message: "",
    row: "",
    modalName: "",
  });

  /* A hook that is used to get the state of the loading from the redux store. */
  const loading = useSelector(({ loading }) => loading.loading);

  // ** States
  const [showOldPassword, setShowOldassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

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

  const { control, handleSubmit, formState, reset, watch, setValue, setError } =
    methods;
  const { errors } = formState;
  
  const form = watch();

  const handleFinalFormSubmit = (data) => {
    openModal({
      isOpen: true,
      title: "Confirm",
      message: `This action cannot be undone!`,
      row: data,
      modalName: "Reset",
    });
  };

  const onSubmit = (data) => {};

  return (
    <div className="login-section">
      <Container>
        <Row className="align-items-center">
          <Col md="10" className="m-auto">
            <div className="shadow-box">
              <Row className="align-items-center">
                <Col md={6}>
                  <div className="login-form">
                    <h3>Forgot Password</h3>

                    <Divider sx={{ my: "0 !important" }} />
                    <CardContent>
                      <Alert
                        severity="info"
                        sx={{ display: "inline-flex", marginBottom: "20px" }}
                      >
                        * Note:- Your new password must be different from
                        previously used passwords.
                      </Alert>
                      <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(handleFinalFormSubmit)}>
                          <Grid container spacing={6}>
                            <Grid item>
                              <FormControl fullWidth className="input-grp">
                                <InputLabel
                                  htmlFor="user-account-v5-password"
                                  error={Boolean(errors.old_password)}
                                >
                                  Old Password*
                                </InputLabel>
                                <Controller
                                  name="old_password"
                                  control={control}
                                  rules={{ required: true }}
                                  render={({ field: { value, onChange } }) => (
                                    <OutlinedInput
                                      value={value}
                                      label="Old Password*"
                                      onChange={onChange}
                                      id="user-account-v5-password"
                                      error={Boolean(errors.old_password)}
                                      type={
                                        showOldPassword ? "text" : "password"
                                      }
                                      endAdornment={
                                        <InputAdornment position="end">
                                          <IconButton
                                            edge="end"
                                            onMouseDown={(e) =>
                                              e.preventDefault()
                                            }
                                            onClick={() =>
                                              setShowOldassword(
                                                !showOldPassword
                                              )
                                            }
                                          >
                                            <Icon
                                              icon={
                                                showOldPassword
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
                                {errors.old_password && (
                                  <FormHelperText
                                    sx={{ color: "error.main" }}
                                    id=""
                                  >
                                    {errors.old_password.message}
                                  </FormHelperText>
                                )}
                              </FormControl>
                              <FormControl fullWidth className="input-grp">
                                <InputLabel
                                  htmlFor="user-account-v5-password"
                                  error={Boolean(errors.new_password)}
                                >
                                  New Password*
                                </InputLabel>
                                <Controller
                                  name="new_password"
                                  control={control}
                                  rules={{ required: true }}
                                  render={({ field: { value, onChange } }) => (
                                    <OutlinedInput
                                      value={value}
                                      label="New Password*"
                                      onChange={onChange}
                                      id="user-account-v5-password"
                                      error={Boolean(errors.new_password)}
                                      type={
                                        showNewPassword ? "text" : "password"
                                      }
                                      endAdornment={
                                        <InputAdornment position="end">
                                          <IconButton
                                            edge="end"
                                            onMouseDown={(e) =>
                                              e.preventDefault()
                                            }
                                            onClick={() =>
                                              setShowNewPassword(
                                                !showNewPassword
                                              )
                                            }
                                          >
                                            <Icon
                                              icon={
                                                showNewPassword
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
                                {errors.new_password && (
                                  <FormHelperText
                                    sx={{ color: "error.main" }}
                                    id=""
                                  >
                                    {errors.new_password.message}
                                  </FormHelperText>
                                )}
                              </FormControl>

                              <FormControl fullWidth className="input-grp">
                                <InputLabel
                                  htmlFor="user-account-v9-password"
                                  error={Boolean(errors.confirm_password)}
                                >
                                  Confirm Password*
                                </InputLabel>
                                <Controller
                                  name="confirm_password"
                                  control={control}
                                  rules={{ required: true }}
                                  render={({ field: { value, onChange } }) => (
                                    <OutlinedInput
                                      value={value}
                                      label="Confirm Password*"
                                      onChange={onChange}
                                      id="user-account-v9-password"
                                      error={Boolean(errors.password)}
                                      type={
                                        showConfirmNewPassword
                                          ? "text"
                                          : "password"
                                      }
                                      endAdornment={
                                        <InputAdornment position="end">
                                          <IconButton
                                            edge="end"
                                            onMouseDown={(e) =>
                                              e.preventDefault()
                                            }
                                            onClick={() =>
                                              setShowConfirmNewPassword(
                                                !showConfirmNewPassword
                                              )
                                            }
                                          >
                                            <Icon
                                              icon={
                                                showConfirmNewPassword
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
                                {errors.confirm_password && (
                                  <FormHelperText
                                    sx={{ color: "error.main" }}
                                    id=""
                                  >
                                    {errors.confirm_password.message}
                                  </FormHelperText>
                                )}
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Button
                              className="login-btn"
                              size="large"
                              type="submit"
                              variant="contained"
                              sx={{ mb: 5.25 }}
                            >
                              Set New Password
                            </Button>
                          </Grid>
                        </form>
                      </FormProvider>
                    </CardContent>
                    <ConfirmAlert
                      show={modal.isOpen}
                      status={"warning"}
                      title={modal.title}
                      body={modal.message}
                      buttonConfirmText={"Confirm"}
                      onClose={() => openModal({ isOpen: false })}
                      onConfirm={() => onSubmit(modal.row)}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="text-center  response">
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

export default ResetPassword;
