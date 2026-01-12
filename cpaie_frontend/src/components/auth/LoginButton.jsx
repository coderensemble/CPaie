import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = ({ className = '' }) => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

console.log('AUTH USER 👉', user);

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: window.location.pathname,
      },
    });
  };

  return (
    <button
      onClick={handleLogin}
      className={`bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors ${className}`}
    >
      Se connecter
    </button>
  );
};