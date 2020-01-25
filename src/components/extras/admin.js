import React from 'react';
import { useAppState } from '../contexts/app/useAppState';
import { AdminPhotos } from './admin-photos';
import { AdminPosts } from './admin-posts';

export const Admin = () => {
  const { user } = useAppState();

  return user.authenticated ? (
    <div>
      <AdminPosts />
      <hr />
      <AdminPhotos />
    </div>
  ) : (
    <div>logged out</div>
  );
};
