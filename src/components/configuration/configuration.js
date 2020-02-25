import React from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../contexts/app/useAppDispatch';
import { useAppState } from '../contexts/app/useAppState';

axios.defaults.baseURL = 'http://localhost:5000/legbah-60d90/europe-west1/api';
// 'https://europe-west1-legbah-60d90.cloudfunctions.net/api';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = true;

export const Configuration = ({ children }) => {
  const { logout, getUser } = useAppDispatch();
  const { user } = useAppState();
  const router = useRouter();

  React.useEffect(() => {
    const token = localStorage.getItem('legbah-token');
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        logout();
        router.push('/');
      } else {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        if (!user.authenticated) {
          getUser();
        }
      }
    }
  }, [getUser, logout, router, user.authenticated]);

  return children;
};
