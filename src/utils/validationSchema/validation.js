import moment from "moment/moment";
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
const registerSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Invalid email"),
  firstName: yup
    .string()
    .required("Please enter first name")
    .matches(/^[A-Za-z\s]+$/, "Please enter valid first name.")
    .max(20, "First name can be most 20 characters"),
  lastName: yup
    .string()
    .trim()
    .required("Last name is required")
    .matches(/^[a-zA-Z ]+$/, "Invalid last name"),
  username: yup.string().required("Username is required"),
  mobile: yup
    .string()
    .trim()
    .required("Phone number is required")
    .matches(/^[6-9]/, {
      message: "Invalid mobile number",
      excludeEmptyString: false,
    })
    .max(10, "Enter valid number")
    .test("len", "Enter valid phone number", (val) => val?.length === 10),
  organization: yup.string().required("Please select Organization name"),
  terms: yup.bool().oneOf([true], "You must accept the privacy policy & terms"),
  date_of_birth: yup
    .string()
    .nullable()
    .test("date_of_birth", "You must be 12 years or older", function (value) {
      return moment().diff(moment(value, "DD-MM-YYYY"), "years") >= 12;
    })
    .required("Please enter your age"),
});

const changePasswordSchema = yup.object().shape({
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

const resetPasswordSchema = yup.object().shape({
  old_password: yup.string().required("Old Password is required"),
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



const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Invalid email"),
});

const activationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Invalid email"),
  temporaryPassword: yup
    .string()
    .trim()
    .required("Invalid Password"),
  activationCode:yup
    .string()
    .trim()
    .required("Invalid Activation Code"),
});

  const OtpVerificationschema = yup.object().shape({
    otp: yup
      .string()
      .trim()
      .required("OTP is required")
      .max(6, "Enter valid number")
      .test("len", "Enter valid phone number", (val) => val?.length === 6),
  });

  const emailSchema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .required("Email is required")
      .email("Invalid email"),
  });

export {
  loginSchema,
  resetPasswordSchema,
  forgotPasswordSchema,
  registerSchema,
  activationSchema,
  OtpVerificationschema,
  emailSchema,
  changePasswordSchema,
};


