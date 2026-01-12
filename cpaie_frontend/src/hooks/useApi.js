import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useCallback } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export const useApi = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const apiCall = useCallback(
    async (endpoint, options = {}) => {
      try {
        let token;
        
        if (isAuthenticated) {
          token = await getAccessTokenSilently({
            authorizationParams: {
              audience: process.env.REACT_APP_AUTH0_AUDIENCE,
            },
          });
        }

        const response = await axios({
          url: `${API_URL}${endpoint}`,
          ...options,
          headers: {
            'Content-Type': 'application/json',
            ...options.headers,
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        });

        return response.data;
      } catch (error) {
        console.error('API call failed:', {
          endpoint,
          status: error.response?.status,
          error: error.response?.data,
        });
        throw error;
      }
    },
    [getAccessTokenSilently, isAuthenticated]
  );

  return { apiCall };
};