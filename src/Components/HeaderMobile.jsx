import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

import { useState } from "react";
import { Link } from "react-router-dom";

const Mobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        aria-label="Open Menu"
        title="Open Menu"
        onClick={() => setOpenMenu(true)}
        className=" "
      >
        <Bars3Icon className="w-5 text-gray-500" />
      </button>

      {/* Conditional Rendering */}
      {openMenu && (
        <div className="absolute z-10 top-0 left-0 w-full bg-white border shadow-sm p-5 ">
          <div className="inline-flex items-center justify-between rounded w-full">
            <div>
              <Link to="/" className="inline-flex items-center ">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-200">
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
                    HG
                  </h1>
                </div>
              </Link>
            </div>
            <div>
              <button
                aria-label="Close Menu"
                title="Close Menu"
                onClick={() => setOpenMenu(false)}
              >
                <XMarkIcon className="w-5 text-gray-600" />
              </button>
            </div>
          </div>

          <nav className="mt-3">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  aria-label="Home"
                  title="Home"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  aria-label="Shop"
                  title="Shop"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  aria-label="Cart"
                  title="Cart"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <div className="relative py-3">
                    <ShoppingCartIcon className="h-6 w-6 text-cyan-400" />
                    <p className="absolute top-0 right-28 text-base">
                      {cart.length}
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  aria-label="About Us"
                  title="About Us"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
export default Mobile;
