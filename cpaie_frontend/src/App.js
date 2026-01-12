import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import SaaSProductLandingPage from "./landingPage/LandingPage.js";
import LegalNotices from "./pages/LegalNotices.js";
import PrivacyPolicyPage from "./pages/RGPDPolicy.js";
import ContactUsPage from "./pages/ContactUs.js";
import ScrollToTop from "./helpers/ScrollToTop.js";
import ClientDashboard from "./pages/clientDashboard/ClientDashboard.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard";
import { LoginButton } from "./components/auth/LoginButton.jsx";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          {/* Routes publiques */}
          <Route path="/" element={<SaaSProductLandingPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/legalnotices" element={<LegalNotices />} />
          <Route path="/policy" element={<PrivacyPolicyPage />} />
          <Route path="/callback" element={<LoginButton />} />

          {/* Routes protégées - Client */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute requiredRole="client">
                <ClientDashboard />
              </ProtectedRoute>
            }
          />

          {/* Routes protégées - Admin */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Route non autorisée */}
          <Route
            path="/unauthorized"
            element={
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-red-600 mb-4">Accès Refusé</h1>
                  <p className="text-gray-600">Vous n'avez pas les permissions nécessaires.</p>
                  <a href="/" className="text-blue-600 hover:underline mt-4 inline-block">
                    Retour à l'accueil
                  </a>
                </div>
              </div>
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                  <p className="text-gray-600">Page non trouvée</p>
                  <a href="/" className="text-blue-600 hover:underline mt-4 inline-block">
                    Retour à l'accueil
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}