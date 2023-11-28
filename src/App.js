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
import SmeData from "./allServices/smeData";
import AirtimePurchase from "./allServices/airtimePurchase";
import Bulksms from "./allServices/bulksms";
import CableTV from "./allServices/cableTV";
import FundWallet from "./pages/fundWallet";
import WithdrawFunds from "./pages/withdrawFunds";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    accName: "",
    accNo: "",
  });

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

        <Route
          path="/dashboard"
          element={
            <Dashboard
              cards={cards}
              setCards={setCards}
              bankDetails={bankDetails}
              setBankDetails={setBankDetails}
            />
          }
        />

        <Route path="/sme data" element={<SmeData />} />
        <Route path="/airtime purchase" element={<AirtimePurchase />} />
        <Route path="/bulk sms" element={<Bulksms />} />
        <Route path="/cable tv subscription" element={<CableTV />} />

        <Route
          path="/fund wallet"
          element={<FundWallet cards={cards} setCards={setCards} />}
        />
        <Route
          path="/withdraw funds"
          element={<WithdrawFunds bankDetails={bankDetails} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
