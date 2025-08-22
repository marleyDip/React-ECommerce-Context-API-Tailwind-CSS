import { Link } from "react-router-dom";
import banner from "../assets/banner1.jpg";

const MidBanner = () => {
  return (
    <div className="bg-gray-100 md:py-24">
      <div
        className="relative max-w-7xl h-[550px] md:h-[600px] mx-auto md:rounded-2xl pt-28 bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60 md:rounded-2xl flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="capitalize text-3xl md:text-5xl  lg:text-6xl font-bold mb-4">
              Next-gen Electronics at your fingertips
            </h1>

            <p className="text-lg md:text-xl mb-6">
              Discover the latest tech innovations with unbeatable prices & free
              shipping on all orders.
            </p>

            <Link to={"/products"}>
              <button className="bg-gradient-to-br from-rose-600 via-pink-500 to-orange-600 hover:from-rose-700 hover:via-pink-600 hover:to-orange-700  text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg hover:rounded-xl hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
