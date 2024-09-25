import React from 'react';
import logo from './logo.svg';
import './App.css';
import AdminLayout from './layout/AdminLayout';

function App() {
  return (
    <>
      <AdminLayout>
        <h1 className="text-2xl">Welcome to the Admin Dashboard</h1>
        {/* Add more components or routes here */}
      </AdminLayout>
    </>
  );
}

export default App;
