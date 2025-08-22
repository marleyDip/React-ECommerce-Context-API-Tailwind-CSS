import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center font-serif">
          About Sofian Shop
        </h1>

        <p className="text-gray-700 text-lg text-justify">
          Welcome to{" "}
          <span className="font-semibold text-emerald-600 hover:text-rose-600 font-mono">
            Sofian Shop
          </span>
          , your one-stop destination for the latest and greatest in
          electronics. From cutting-edge gadgets to must-have accessories, we’re
          here to power up your tech life with premium products and unbeatable
          service.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600 font-serif">
            Our Mission
          </h2>

          <p className="text-gray-700 text-base sm:font-normal text-justify">
            At{" "}
            <span className="font-semibold text-rose-600 hover:text-emerald-600 font-mono">
              Sofian Shop
            </span>
            , our mission is to make innovative technology accessible to
            everyone. We’re passionate about connecting people with the tools
            and tech they need to thrive in a digital world — all at competitive
            prices and delivered with speed and care.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600 font-serif">
            Why Choose Sofian Shop?
          </h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2 sm:font-normal">
            <li>Top-quality electronic products from trusted brands</li>
            <li>Lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassle-free shopping experience</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600 font-serif">
            Our Vision
          </h2>

          <p className="text-gray-700 text-base sm:font-normal text-justify">
            We envision a future where technology elevates everyday life. At{" "}
            <span className="font-semibold text-rose-600 hover:text-emerald-600 font-mono">
              Sofian Shop
            </span>
            , we’re committed to staying ahead of the curve, offering
            cutting-edge solutions that are both practical and affordable.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-red-600 mb-2 font-serif">
            Join the Sofian Shop Family
          </h3>

          <p className="text-gray-700 mb-4 text-justify sm:font-normal">
            Whether you’re a tech enthusiast, a professional, or just looking
            for something cool and functional —{" "}
            <span className="font-semibold text-rose-600 hover:text-emerald-600 font-mono">
              Sofian Shop
            </span>{" "}
            has something for everyone.
          </p>

          <Link to={"/products"}>
            <button className="bg-gradient-to-br from-rose-600 via-pink-500 to-orange-600 hover:from-rose-700 hover:via-pink-600 hover:to-orange-700 hover:bg-gradient-to-t  text-white font-semibold px-6 py-2 md:px-6 md:py-3 font-serif rounded-lg shadow-lg hover:rounded-xl hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
