import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import Dashboard from './modules/admin/Dashboard';
import Sigin from './modules/auth/Sigin';
import Signup from './modules/auth/Signup';
import ForgotPassword from './modules/auth/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />
          {/* Add other admin routes here */}
        </Route>

        {/* Authentication routes without AdminLayout */}
        <Route path="/sign-in" element={<Sigin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
