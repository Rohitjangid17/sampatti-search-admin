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
import AddNewAgent from './modules/admin/agents/AddNewAgent';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/sign-in" />} />
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/sign-in" />} />
        <Route path="/property" element={isAuthenticated ? <Property /> : <Navigate to="/sign-in" />} />
        <Route path="/agents" element={isAuthenticated ? <Agents /> : <Navigate to="/sign-in" />} />
        <Route path="/add-new-agent" element={isAuthenticated ? <AddNewAgent /> : <Navigate to="/sign-in" />} />
        <Route path="/customers" element={isAuthenticated ? <Customers /> : <Navigate to="/sign-in" />} />
        <Route path="/orders" element={isAuthenticated ? <Orders /> : <Navigate to="/sign-in" />} />
        <Route path="/reviews" element={isAuthenticated ? <Reviews /> : <Navigate to="/sign-in" />} />
        <Route path="/blog" element={isAuthenticated ? <Blog /> : <Navigate to="/sign-in" />} />
        <Route path="/settings" element={isAuthenticated ? <Settings /> : <Navigate to="/sign-in" />} />
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