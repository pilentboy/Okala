import { NavLink, Outlet } from "react-router-dom";
import { Home, ShoppingCart, NotepadText, LogIn } from "lucide-react";

const Nav = () => {
  return (
    <>
      <nav className="fixed bottom-0 left-1/2 translate-x-[-50%] z-50 h-20 w-full  md:w-[600px] bg-white flex flex-row-reverse items-center border-t  justify-between p-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${
              isActive ? "text-red-600" : "text-gray-400"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Home color={isActive ? "#dc2626" : "#9ca3af"} size={22} />
              <span className="text-sm line-clamp-1 text-gray-400">خانه</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="shop"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${
              isActive ? "text-red-600" : "text-gray-400"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <ShoppingCart
                color={isActive ? "#dc2626" : "#9ca3af"}
                size={22}
              />
              <span className="text-sm line-clamp-1 text-gray-400">
                سبد خرید
              </span>
            </>
          )}
        </NavLink>
        <NavLink
          to="purchases"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${
              isActive ? "text-red-600" : "text-gray-400"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <NotepadText color={isActive ? "#dc2626" : "#9ca3af"} size={22} />
              <span className="text-sm line-clamp-1 text-gray-400">
                سفارش ها
              </span>
            </>
          )}
        </NavLink>
        <NavLink
          to="auth"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${
              isActive ? "text-red-600" : "text-gray-400"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <LogIn color={isActive ? "#dc2626" : "#9ca3af"} size={22} />
              <span className="text-sm line-clamp-1 text-gray-400">ورود</span>
            </>
          )}
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
