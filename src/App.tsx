import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Dashboard from './modules/admin/Dashboard';
import Signin from './modules/auth/Signin';
import Signup from './modules/auth/Signup';
import ForgotPassword from './modules/auth/ForgotPassword';
import AdminLayout from './layout/AdminLayout';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/sign-in" />} />
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/sign-in" />} />
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