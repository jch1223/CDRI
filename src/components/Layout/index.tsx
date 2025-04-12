import { Outlet } from 'react-router';

import { Header } from '@/components/Layout/Header';

export const Layout = () => {
  return (
    <div>
      <Header />

      <div className="flex justify-center">
        <div className="mx-4 w-full max-w-[960px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
