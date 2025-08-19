import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between">
        {/* info */}
        <div className="mb-6 md:mb-0">
          <Link to={"/"}>
            <h1 className="font-bold text-2xl text-red-500 font-serif">
              Sofian <span className="text-green-500 font-mono">Shop</span>
            </h1>
          </Link>

          <p className="mt-2 font-medium text-sm">
            Powering your world with the best in Electronics.
          </p>

          <p className="mt-2 font-medium text-sm cursor-pointer hover:text-rose-400">
            <a href="https://maps.app.goo.gl/TZQrDRBGdmNeQPEN7" target="_blank">
              Someshpur, Belkuchi, Sirajganj, Rajshahi <br /> Bangladesh
            </a>
          </p>

          <p className="text-sm font-medium">
            Email:
            <a
              href="mailto:dip.akand9899@gmail.com"
              className="ml-2 hover:text-amber-400"
            >
              dip.akand9899@gmail.com
            </a>
          </p>

          <p className="text-sm font-medium">
            Phone:
            <a href="tel:+8801689190142" className="ml-2 hover:text-amber-400">
              (+880) 1689 190142
            </a>
          </p>
        </div>
        {/* info */}

        {/* customer services link */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold">Customer Service</h3>
          <ul className="mt-2 text-sm font-medium space-y-2">
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>FAQs</li>
            <li>Order Tracking</li>
            <li>Size Guide</li>
          </ul>
        </div>
        {/* customer services link */}

        {/* social media link */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2 cursor-pointer">
            <FaFacebook className="transform hover:scale-110 active:scale-95 hover:-translate-y-1 transition-all duration-200 ease-in-out" />
            <FaInstagram className="transform hover:scale-110 active:scale-95 hover:-translate-y-1 transition-all duration-200 ease-in-out" />
            <FaTwitter className="transform hover:scale-110 active:scale-95 hover:-translate-y-1 transition-all duration-200 ease-in-out" />
            <FaPinterest className="transform hover:scale-110 active:scale-95 hover:-translate-y-1 transition-all duration-200 ease-in-out" />
          </div>
        </div>
        {/* social media link */}

        {/* newsletter subscription */}
        <div>
          <h3 className="text-xl font-semibold">Stay in the Loop</h3>
          <p className="mt-2 text-sm font-semibold">
            Subscribe to get special offers, free giveaways, and more
          </p>

          <form action="" className="mt-4 flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full p-2 rounded-l-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* newsletter subscription */}
      </div>

      {/* bottom section */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-base font-semibold">
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://marleydip.netlify.app/"
          target="_blank"
          className="text-emerald-400 hover:text-rose-400 cursor-pointer"
        >
          Md Sofian Hasan
        </a>
        . All Right Reserved
      </div>
      {/* bottom section */}
    </footer>
  );
};

export default Footer;
