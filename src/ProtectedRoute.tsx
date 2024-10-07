import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated } = useAuth();

    // If user is not authenticated, redirect to sign-in
    if (!isAuthenticated) {
        return <Navigate to="/sign-in" replace />;
    }

    // If user is authenticated, render the child components
    return <>{children}</>;
};

export default ProtectedRoute;