import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Pages/Home";
import TermsConditions from "./Components/TermsConditions/TermsConditions";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import PricingDetails from "./Components/PricingDetails/PricingDetails";
import ContactUs from "./Components/ContactUs/ContactUs";
import RefundPolicy from "./Components/RefundPolicy/RefundPolicy";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} exact />

        <Route path="/privacy-policy" element={<TermsConditions />} exact />
        <Route path="/price" element={<PricingDetails />} exact />
        <Route path="/contact" element={<ContactUs />} exact />
        <Route path="/refund-policy" element={<RefundPolicy />} exact />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
