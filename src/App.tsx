import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Dashboard from './modules/admin/dashboard/Dashboard';
import Signin from './modules/auth/Signin';
import Signup from './modules/auth/Signup';
import ForgotPassword from './modules/auth/ForgotPassword';
import AdminLayout from './layout/AdminLayout';
import Property from './modules/admin/property/Property';
import Settings from './modules/admin/settings/Settings';
import Blog from './modules/admin/blog/Blog';
import Reviews from './modules/admin/reviews/Reviews';
import Orders from './modules/admin/orders/Orders';
import Agents from './modules/admin/agents/Agents';
import Customers from './modules/admin/customers/Customers';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/sign-in" />} />
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/property" element={
          <ProtectedRoute>
            <Property />
          </ProtectedRoute>
        } />
        <Route path="/agents" element={
          <ProtectedRoute>
            <Agents />
          </ProtectedRoute>
        } />
        <Route path="/customers" element={
          <ProtectedRoute>
            <Customers />
          </ProtectedRoute>
        } />
        <Route path="/orders" element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        } />
        <Route path="/reviews" element={
          <ProtectedRoute>
            <Reviews />
          </ProtectedRoute>
        } />
        <Route path="/blog" element={
          <ProtectedRoute>
            <Blog />
          </ProtectedRoute>
        } />
        <Route path="/settings" element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } />
      </Route>
      <Route path="/sign-in" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Signin />} />
      <Route path="/sign-up" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Signup />} />
      <Route path="/forgot-password" element={isAuthenticated ? <Navigate to="/dashboard" /> : <ForgotPassword />} />
    </Routes>
  );
};

const App = () => (
  <AuthProvider>
    <Router>
      <AppRoutes />
    </Router>
  </AuthProvider>
);

export default App;