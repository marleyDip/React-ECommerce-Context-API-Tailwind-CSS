import { UserButton, useUser } from "@clerk/clerk-react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ openNav, setOpenNav }) => {
  const { user } = useUser();

  return (
    <div
      className={`${
        openNav ? "left-0" : "-left-[100%]"
      } md:hidden fixed bottom-0 top-0 z-20 h-screen w-[75%] flex flex-col justify-between bg-white text-black px-8 py-6 pt-16 rounded-r-xl shadow-md transition-all`}
    >
      <div>
        {/* sign */}
        <div className="flex items-center justify-start gap-3">
          {user ? <UserButton size={50} /> : <FaUserCircle size={50} />}

          <div className="font-medium ml-2">
            <h1 className="text-slate-600">Hello, {user?.firstName}</h1>
            <h1 className="text-sm text-red-600">Premium User</h1>
          </div>
        </div>
        {/* sign */}

        {/* menu */}
        <div className="mt-12">
          <ul className="flex flex-col gap-7 text-2xl font-semibold">
            <Link
              to={"/"}
              onClick={() => setOpenNav(false)}
              className="cursor-pointer"
            >
              <li>Home</li>
            </Link>

            <Link
              to={"/products"}
              onClick={() => setOpenNav(false)}
              className="cursor-pointer"
            >
              <li>Products</li>
            </Link>

            <Link
              to={"/about"}
              onClick={() => setOpenNav(false)}
              className="cursor-pointer"
            >
              <li>About</li>
            </Link>

            <Link
              to={"/contact"}
              onClick={() => setOpenNav(false)}
              className="cursor-pointer"
            >
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        {/* menu */}
      </div>
    </div>
  );
};

export default ResponsiveMenu;
