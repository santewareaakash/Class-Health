import Homepage from "../../pages/Homepage/Homepage";
import PrivacyPolicy from "../../pages/PrivacyPolicy/PrivacyPolicy";
import TermAndCondition from "../../pages/TermsAndCondition/TermAndCondition";
import ForgotPassword from "../../pages/auth/ForgotPassword";
import Login from "../../pages/auth/Login";
import ResetPassword from "../../pages/auth/ResetPassword";
import Signup from '../../pages/auth/Signup'

export const routes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/terms_conditions",
    element: <TermAndCondition />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
];
