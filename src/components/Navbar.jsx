import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";

import { Link, NavLink } from "react-router-dom";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useCart } from "../context/CartContext";

const Navbar = ({ location, getLocation, openDropDown, setOpenDropDown }) => {
  const { cartItem } = useCart();

  const toggleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

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

          <div className="group flex items-center gap-1 text-gray-700">
            <MapPin className="text-red-500 transform group-hover:scale-125 active:95 transition-transform duration-200 ease-out" />

            <span className="mr-1">
              {location ? (
                <div className="flex flex-col leading-tight">
                  <span className="font-medium">
                    {location.city}, {location.state_district}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {location.state}, {location.country}
                  </span>
                </div>
              ) : (
                "Add Address"
              )}
            </span>

            <FaCaretDown
              size={16}
              onClick={toggleDropDown}
              className="transform hover:rotate-[360deg] transition-transform duration-200 ease-in cursor-pointer"
            />
          </div>
          {openDropDown ? (
            <div className="w-[220px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 p-4 border-2 border-gray-100 rounded-md">
              <h1 className="font-semibold text-lg relative">
                Change Location
                <span>
                  <CgClose
                    onClick={toggleDropDown}
                    className="absolute -top-2 -right-2 transform hover:rotate-180 transition-transform duration-200 ease-in cursor-pointer"
                  />
                </span>
              </h1>

              <button
                onClick={getLocation}
                className="bg-red-500 text-white mt-2 px-3 py-1.5 rounded-md  shadow-md hover:shadow-lg hover:rounded-lg hover:bg-red-400 transform hover:translate-x-1 hover:-translate-y-0.5 duration-200 ease-in-out cursor-pointer"
              >
                Detect my location
              </button>
            </div>
          ) : null}
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

          <Link to={"/cart"} className="relative group">
            <IoCartOutline className="w-7 h-7" />
            <span className="absolute -top-3 -right-3 px-2 rounded-full bg-red-500 text-white transform group-hover:-translate-y-1 transition-transform duration-200 ease-in-out ">
              {cartItem.length}
            </span>
          </Link>

          <div>
            <SignedOut>
              <SignInButton className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-3 py-1 rounded-md shadow-md hover:rounded-lg hover:shadow-lg transform hover:scale-102 active:scale-95  cursor-pointer transition-all duration-200 ease-in-out" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
        {/* menu section */}
      </div>
    </div>
  );
};

export default Navbar;
