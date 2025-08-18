import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { useEffect } from "react";
import { GetData } from "../context/DataContext";

const Carousel = () => {
  const { data, fetchAllProducts } = GetData();

  console.log(data);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 3 }}
      >
        <AiOutlineArrowLeft
          className="arrows"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            left: "50px",
          }}
          onMouseOver="this.style.backgroundColor=#555"
        />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <AiOutlineArrowRight
          className="arrows"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            right: "50px",
          }}
          onMouseOver="this.style.backgroundColor=#555"
        />
      </div>
    );
  };

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };

  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10"
            >
              <div className="flex items-center justify-center h-[600px] px-4 gap-10">
                <div className="space-y-6">
                  <h3 className="text-red-500 font-semibold font-sans text-sm">
                    Powering your world with the best in Electronics
                  </h3>

                  <h1 className="text-4xl font-bold uppercase line-clamp-3 text-white md:w-[500px]">
                    {item.title}
                  </h1>

                  <p className="md:w-[500px] line-clamp-3 text-gray-400 pr-7">
                    {item.description}
                  </p>

                  <button className="bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 text-white px-3 py-1.5 mt-2 rounded-md shadow-md hover:rounded-lg hover:shadow-lg  cursor-pointer">
                    Shop Now
                  </button>
                </div>

                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[500px] rounded-full shadow-2xl shadow-red-400 transform hover:scale-105 active:95 hover:-translate-y-4 hover:translate-x-4 hover:rotate-[360deg] transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
