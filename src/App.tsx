import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import Dashboard from './modules/admin/Dashboard';
import Sigin from './modules/auth/Sigin';
import Signup from './modules/auth/Signup';
import ForgotPassword from './modules/auth/ForgotPassword';
import Property from './modules/admin/property/Property';

const App = () => {
  const isAuthenticated: boolean = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/sign-in" />} />

        <Route element={<AdminLayout />}>
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/sign-in" />}
          />
          <Route
            path="/property"
            element={isAuthenticated ? <Property /> : <Navigate to="/sign-in" />}
          />
        </Route>

        {/* Authentication routes without AdminLayout */}
        <Route path="/sign-in" element={<Sigin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
