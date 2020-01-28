import React from 'react';
import { useAppState } from '../contexts/app/useAppState';
import { AdminPhotos } from './admin-photos';
import { AdminPosts } from './admin-posts';
import { AdminTours } from './admin-tours';

export const Admin = () => {
  const { user } = useAppState();

  return user.authenticated ? (
    <div>
      <AdminPosts />
      <hr />
      <AdminPhotos />
      <hr />
      <AdminTours />
    </div>
  ) : (
    <div>logged out</div>
  );
};
