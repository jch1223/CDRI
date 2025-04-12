import { NavLink } from 'react-router';

export const Header = () => {
  return (
    <div className="flex h-20 items-center">
      <div className="ml-[8%] mr-[20%] text-typography-primary text-h1-bold">
        CERTICOS BOOKS
      </div>

      <div className="flex justify-center gap-14">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-typography-primary text-b1-medium ${isActive ? 'underline decoration-primary underline-offset-8' : ''}`
          }
        >
          도서 검색
        </NavLink>
        <NavLink
          to="/likes"
          className={({ isActive }) =>
            `text-typography-primary text-b1-medium ${isActive ? 'underline decoration-primary underline-offset-8' : ''}`
          }
        >
          내가 찜한 책
        </NavLink>
      </div>
    </div>
  );
};
