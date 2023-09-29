import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Dashboard from "./pages/dashboard";
import Plans from "./pages/plans";
import ScrollToTop from "./components/ScrollToTop";
import PasswordReset from "./pages/passwordReset";
import PasswordResetCode from "./pages/passwordResetCode";
import CreatePassword from "./pages/createPassword";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />

        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/confirmcode" element={<PasswordResetCode />} />
        <Route path="/createpassword" element={<CreatePassword />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
