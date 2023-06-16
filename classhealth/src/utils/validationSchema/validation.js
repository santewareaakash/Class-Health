import * as yup from "yup";

//Below is the schema for login and reset password forms

const sendEmailSchema = yup.object().shape({
  user_name: yup.string().required("Name is required"),
  user_country: yup.string().required("Name is required"),
  user_email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Invalid email"),
  user_mobile: yup
    .string()
    .trim()
    .required("Phone number is required")
    .matches(/^\+*[0-9]+$/, {
      message: "Invalid mobile number",
      excludeEmptyString: false,
    }),
});

export { sendEmailSchema };
