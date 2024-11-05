import create from 'zustand';
import axios from 'axios';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: async (email, password) => {
        try {
          const response = await axios.post('http://localhost:5000/api/auth/login', {
            email,
            password,
          });
          set({
            user: response.data.user,
            token: response.data.token,
            isAuthenticated: true,
          });
        } catch (error) {
          throw error;
        }
      },
      register: async (username, email, password) => {
        try {
          const response = await axios.post('http://localhost:5000/api/auth/register', {
            username,
            email,
            password,
          });
          set({
            user: response.data.user,
            token: response.data.token,
            isAuthenticated: true,
          });
        } catch (error) {
          throw error;
        }
      },
      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
