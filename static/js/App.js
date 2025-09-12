import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/hero/Hero";
import PrivacyPolicy from "./routes/privacy/privacy";
import XythumTermsOfService from "./routes/termsofservice/TermsOfService";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<XythumTermsOfService />} />
      </Routes>
      {/* <Hero/> */}
    </BrowserRouter>
  );
};

export default App;
