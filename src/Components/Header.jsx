import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import Mobile from "./HeaderMobile";

const Header = () => {
  return (
    <div className="  px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative inline-flex justify-between items-center w-full">
        <Link to="/" className="inline-flex items-center ">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className=" w-5 h-5 text-cyan-600"
            >
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
            </svg>
          </div>
          <div>
            <h1 className="text-bold text-xl tracking-wide text-gray-800 ml-3">
              HeroGadget
            </h1>
          </div>
        </Link>

        {/* Nav items */}

        <ul className="items-center hidden space-x-8 lg:flex text-xl lg:content-between">
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              aria-label="Shop"
              title="Shop"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              aria-label="Cart"
              title="Cart"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <ShoppingCartIcon className="h-6 w-6 text-cyan-400" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              aria-label="About Us"
              title="About Us"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About Us
            </NavLink>
          </li>
        </ul>
        <Mobile />
      </div>
    </div>
  );
};
export default Header;
