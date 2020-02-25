import React from 'react';
import { useRouter } from 'next/router';
import { AdminEditPost } from '../../../components/extras/admin-edit-post';

export default () => {
  const router = useRouter();

  return <AdminEditPost newsId={router.query.newsId} />;
};
