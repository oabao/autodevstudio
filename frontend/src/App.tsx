import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import AppHeader from './components/layout/Header';
import AppSidebar from './components/layout/Sidebar';
import ProjectInitPage from './pages/ProjectInit/ProjectInitPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import useUserStore from './stores/userStore';
import RequirementAnalysisPage from './pages/RequirementAnalysis/RequirementAnalysisPage';
import TechStackSelectionPage from './pages/TechStackSelection/TechStackSelectionPage';
import ArchitectureDesignPage from './pages/ArchitectureDesign/ArchitectureDesignPage';
import DevelopmentDashboard from './pages/Development/DevelopmentDashboard';
import BillingPage from './pages/Billing/BillingPage';
import './App.css';

const { Content } = Layout;

const App: React.FC = () => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  return (
    <Router>
      {isAuthenticated ? (
        <Layout style={{ minHeight: '100vh' }}>
          <AppHeader />
          <Layout>
            <AppSidebar />
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Routes>
                  <Route path="/" element={<ProjectInitPage />} />
                  <Route path="/projects/:projectId/requirements" element={<RequirementAnalysisPage />} />
                  <Route path="/projects/:projectId/tech-stack" element={<TechStackSelectionPage />} />
                  <Route path="/projects/:projectId/architecture" element={<ArchitectureDesignPage />} />
                  <Route path="/projects/:projectId/development" element={<DevelopmentDashboard />} />
                  <Route path="/billing" element={<BillingPage />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
