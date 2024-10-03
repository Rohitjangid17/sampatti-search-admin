import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
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
import AddNewAgent from './modules/admin/agents/AddNewAgent';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Root route handling without redirection */}
      <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/sign-in"} replace />} />
      <Route element={<AdminLayout />}>
        {/* Protected Routes */}
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/sign-in" replace />} />
        <Route path="/property" element={isAuthenticated ? <Property /> : <Navigate to="/sign-in" replace />} />
        <Route path="/agents" element={isAuthenticated ? <Agents /> : <Navigate to="/sign-in" replace />} />
        <Route path="/add-new-agent" element={isAuthenticated ? <AddNewAgent /> : <Navigate to="/sign-in" replace />} />
        <Route path="/customers" element={isAuthenticated ? <Customers /> : <Navigate to="/sign-in" replace />} />
        <Route path="/orders" element={isAuthenticated ? <Orders /> : <Navigate to="/sign-in" replace />} />
        <Route path="/reviews" element={isAuthenticated ? <Reviews /> : <Navigate to="/sign-in" replace />} />
        <Route path="/blog" element={isAuthenticated ? <Blog /> : <Navigate to="/sign-in" replace />} />
        <Route path="/settings" element={isAuthenticated ? <Settings /> : <Navigate to="/sign-in" replace />} />
      </Route>
      {/* Authentication Routes */}
      <Route path="/sign-in" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Signin />} />
      <Route path="/sign-up" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Signup />} />
      <Route path="/forgot-password" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <ForgotPassword />} />
    </Routes>
  );
};

export default AppRoutes;
