import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import { ROLES } from "./configs/roles";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import TermAndCondition from "./pages/TermsAndCondition/TermAndCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import NotFound from "./pages/PageNotFound/NotFound";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProfile from "./pages/admin/AdminProfile";
import SuperAdminDashboard from "./pages/SuperAdmin/SuperAdminDashboard";
import StaffDashboard from "./pages/Staff/StaffDashboard";
import SignupRequest from "./pages/auth/SignupRequest";
import ActivationPage from "./pages/auth/ActivateAccount";
import PasswordChange from "./pages/auth/PasswordChange";
import VerifyMobile from "./pages/auth/Otp_verification";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignupRequest />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/terms_conditions" element={<TermAndCondition />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/activate" element={<ActivationPage />} />
      <Route path="/change-password" element={<PasswordChange />} />
      <Route path="/verify-mobile" element={<VerifyMobile />} />
      <Route element={<ProtectedRoutes allowedRoles={[ROLES.ADMIN]} />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/profile" element={<AdminProfile />} />
      </Route>

      <Route element={<ProtectedRoutes allowedRoles={[ROLES.STAFF]} />}>
        <Route path="/staff" element={<StaffDashboard />} />
      </Route>
      <Route element={<ProtectedRoutes allowedRoles={[ROLES.SUPERADMIN]} />}>
        <Route path="/superadmin" element={<SuperAdminDashboard />} />
      </Route>
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate replace to={"/404"} />} />
    </Routes>
  );
}

export default App;
