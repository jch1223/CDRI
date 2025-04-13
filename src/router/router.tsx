import { createBrowserRouter } from 'react-router';

import { Layout } from '@/components/Layout';
import { LikesPage } from '@/pages/Likes';
import { SearchPage } from '@/pages/Search';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: SearchPage },
      { path: 'likes', Component: LikesPage },
    ],
  },
]);
