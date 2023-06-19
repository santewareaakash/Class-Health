import * as yup from "yup";

//Below is the schema for login and reset password forms

// login schema
const loginSchema = yup.object().shape({
  email: yup.string().trim().required('Email is required').email('Invalid email'),
  password: yup
    .string()
    .required('Password is required')
    .trim()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must contain 8 characters, one uppercase, one lowercase, one number and one special case character'
    )
})

const resetPasswordSchema = yup.object().shape({
  new_password: yup
    .string()
    .required("Password is required")
    .trim()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
    ),
  confirm_password: yup
    .string()
    .trim()
    .required("Confirm password is required")
    .oneOf([yup.ref("new_password"), null], "Both password should match")
    .required("Please type password again"),
});



export { loginSchema, resetPasswordSchema };


