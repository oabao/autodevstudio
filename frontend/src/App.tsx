import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import AppLayout from './components/layout/Layout';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import useUserStore from './stores/userStore';

import ProjectInitPage from './pages/ProjectInit/ProjectInitPage';
import RequirementAnalysisPage from './pages/RequirementAnalysis/RequirementAnalysisPage';
import TechStackSelectionPage from './pages/TechStackSelection/TechStackSelectionPage';
import ArchitectureDesignPage from './pages/ArchitectureDesign/ArchitectureDesignPage';
import DevelopmentDashboard from './pages/Development/DevelopmentDashboard';
import BillingPage from './pages/Billing/BillingPage';
import DeliveryPage from './pages/Delivery/DeliveryPage';

// Placeholder Pages

const ProtectedRoutes: React.FC = () => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<ProjectInitPage />} />
            <Route path="/requirements" element={<RequirementAnalysisPage />} />
            <Route path="/tech-stack" element={<TechStackSelectionPage />} />
            <Route path="/design" element={<ArchitectureDesignPage />} />
            <Route path="/development" element={<DevelopmentDashboard />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/billing" element={<BillingPage />} />
          </Route>
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
