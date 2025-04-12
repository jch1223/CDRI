import { createBrowserRouter } from 'react-router';

import { Layout } from '@/components/Layout';
import { Likes } from '@/pages/Likes';
import { Search } from '@/pages/Search';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Search },
      { path: 'likes', Component: Likes },
    ],
  },
]);
