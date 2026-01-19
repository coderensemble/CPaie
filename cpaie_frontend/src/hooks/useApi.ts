import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useCallback } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

export const useApi = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const apiCall = useCallback(
    async (endpoint: string, options: any = {}) => {
      try {
        let token: string | undefined;

        if (isAuthenticated) {
          token = await getAccessTokenSilently({
            authorizationParams: {
              audience: process.env.REACT_APP_AUTH0_AUDIENCE,
              scope: "read:contacts write:contacts admin:all", // ✅ UNIQUEMENT API
            },
          });
        }

          console.log("Access Token:", token); // 👈 Vérifie si tu as bien un token


        const response = await axios({
          method: options.method || "GET",
          url: `${API_URL}${endpoint}`,
          data: options.data,
          headers: {
            ...(token && { Authorization: `Bearer ${token}` }),
            ...(options.headers || {}),
          },
        });

        return response.data;
      } catch (error: any) {
        console.error("API call failed:", {
          endpoint,
          status: error.response?.status,
          error: error.response?.data,
        });
        throw error;
      }
    },
    [getAccessTokenSilently, isAuthenticated]
  );

  const analyseAI = async (formData: any) => {
    return apiCall("/ai/analyse", {
      method: "POST",
      data: formData,
    });
  };

  return { apiCall, analyseAI };
};
