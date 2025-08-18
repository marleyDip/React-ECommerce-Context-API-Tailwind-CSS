import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const location = false;
  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-7">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-red-500 font-serif">S</span>ofian
            </h1>
          </Link>

          <div className="flex items-center cursor-pointer gap-1 text-gray-700">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? <div></div> : "Add Address"}
            </span>
            <FaCaretDown />
          </div>
        </div>
        {/* logo */}

        {/* menu section */}
        <nav className="flex items-center gap-7">
          <ul className="flex items-center gap-7 text-xl font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-3 border-red-500" : "text-black"
                } cursor-pointer transition-all`
              }
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-3 border-red-500" : "text-black"
                } cursor-pointer transition-all`
              }
            >
              <li>Products</li>
            </NavLink>

            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-3 border-red-500" : "text-black"
                } cursor-pointer transition-all`
              }
            >
              <li>About</li>
            </NavLink>

            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-3 border-red-500" : "text-black"
                } cursor-pointer transition-all`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>

          <Link to={"/cart"} className="relative">
            <IoCartOutline className="w-7 h-7" />
            <span className="absolute -top-3 -right-3 px-2 rounded-full bg-red-500 text-white">
              0
            </span>
          </Link>
        </nav>
        {/* menu section */}
      </div>
    </div>
  );
};

export default Navbar;
