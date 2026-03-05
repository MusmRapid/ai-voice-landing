import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AcceptableUsePolicy from "./pages/AcceptableUsePolicy";
import ResponsibleAIPolicy from "./pages/ResponsibleAIPolicy";
import ScrollTop from "./components/ScrollToTop/ScrollTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollTop />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/terms-of-service" element={<TermsOfService />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/acceptable-use-policy" element={<AcceptableUsePolicy />} />

        <Route path="/responsible-ai-policy" element={<ResponsibleAIPolicy />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;