import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import { Loader2 } from 'lucide-react';

export default function PWAStart() {
  const { isAuthenticated, user, initializeAuth } = useAuthStore();

  useEffect(() => {
    // Ensure auth is initialized before redirecting
    if (!isAuthenticated && user === null) {
      initializeAuth().catch(() => {
        // Auth initialization failed, will redirect to login
      });
    }
  }, [isAuthenticated, user, initializeAuth]);

  // Show loading while checking auth
  if (!isAuthenticated && user === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <span className="text-lg">Loading...</span>
        </div>
      </div>
    );
  }

  // Redirect based on user role
  if (user) {
    switch (user.role) {
      case 'super_admin':
        return <Navigate to="/super-admin" replace />;
      case 'factory_admin':
        return <Navigate to="/admin" replace />;
      case 'supervisor':
        return <Navigate to="/supervisor" replace />;
      case 'employee':
        return <Navigate to="/employee" replace />;
      default:
        return <Navigate to="/login" replace />;
    }
  }

  // Not authenticated, redirect to login
  return <Navigate to="/login" replace />;
}

