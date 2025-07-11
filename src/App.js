import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import { css } from "styled-components/macro"; //eslint-disable-line

import SaaSProductLandingPage from "landingPage/SaaSProductLandingPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LegalNotices from "pages/LegalNotices";
import PrivacyPolicyPage from "pages/RGPDPolicy";
import ContactUsPage from 'pages/ContactUs.js';


export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/legalnotices" element={<LegalNotices />} />
          <Route path="/policy" element={<PrivacyPolicyPage />} />
          <Route path="/" element={<SaaSProductLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}
