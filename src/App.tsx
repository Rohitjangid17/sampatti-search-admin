import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import Dashboard from './modules/admin/Dashboard';
import Sigin from './modules/auth/Sigin';
import Signup from './modules/auth/Signup';
import ForgotPassword from './modules/auth/ForgotPassword';

function App() {
  return (
    <Router>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sign-in" element={<Sigin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AdminLayout>
    </Router>
  );
}

export default App;
