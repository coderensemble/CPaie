import React, { createContext, useContext, useMemo } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const { user: auth0User, isAuthenticated, isLoading } = useAuth0();

  const contextValue = useMemo(() => {
    const user = auth0User || null;
    const roles = user?.['https://api.yourapp.com/roles'] || [];
    const normalizedRoles = roles.map(r => r.toLowerCase());

    return {
  user,
  isAuthenticated,
  isLoading,
  userRole: normalizedRoles[0] || null,
  isAdmin: normalizedRoles.includes('admin'),
  isClient: normalizedRoles.includes('client'),
    };
  }, [auth0User, isAuthenticated, isLoading]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }
  return context;
};