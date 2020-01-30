import React from 'react';
import { useAppState } from '../contexts/app/useAppState';
import { AdminPhotos } from './admin-photos';
import { AdminPosts } from './admin-posts';
import { AdminTours } from './admin-tours';
import { AdminContacts } from './admin-contacts';

export const Admin = () => {
  const { user } = useAppState();

  return user.authenticated ? (
    <div>
      <AdminPosts />
      <hr />
      <AdminPhotos />
      <hr />
      <AdminTours />
      <hr />
      <AdminContacts />
    </div>
  ) : (
    <div>logged out</div>
  );
};
