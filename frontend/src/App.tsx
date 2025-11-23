// frontend/src/App.tsx
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import AppLayout from './components/layout/AppLayout'; // Updated import
import ProjectInitPage from './pages/ProjectInit/ProjectInitPage';
import RequirementAnalysisPage from './pages/RequirementAnalysis/RequirementAnalysisPage';
import TechStackSelectionPage from './pages/TechStackSelection/TechStackSelectionPage';
import ArchitectureDesignPage from './pages/ArchitectureDesign/ArchitectureDesignPage';
import DevelopmentDashboard from './pages/Development/DevelopmentDashboard';
import DeliveryPage from './pages/Delivery/DeliveryPage';
import BillingPage from './pages/Billing/BillingPage';
import LoginPage from './pages/UserAuth/LoginPage';
import RegisterPage from './pages/UserAuth/RegisterPage';

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={
            <AppLayout>
              <Routes>
                <Route path="/" element={<h2>Dashboard</h2>} />
                <Route path="/new-project" element={<ProjectInitPage />} />
                <Route path="/project/:id/requirements" element={<RequirementAnalysisPage />} />
                <Route path="/project/:id/tech-stack" element={<TechStackSelectionPage />} />
                <Route path="/project/:id/architecture" element={<ArchitectureDesignPage />} />
                <Route path="/project/:id/development" element={<DevelopmentDashboard />} />
                <Route path="/project/:id/delivery" element={<DeliveryPage />} />
                <Route path="/billing" element={<BillingPage />} />
              </Routes>
            </AppLayout>
          } />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
