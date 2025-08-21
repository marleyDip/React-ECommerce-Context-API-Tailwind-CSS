import { useNavigate } from "react-router-dom";

const BreadCrums = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto my-10">
      <h1 className="text-xl font-semibold text-gray-700">
        <span
          className="cursor-pointer hover:text-rose-700 inline-block hover:-translate-x-0.5 transition-transform duration-200"
          onClick={() => navigate("/")}
        >
          Home
        </span>{" "}
        /{" "}
        <span
          className="cursor-pointer hover:text-fuchsia-700 inline-block hover:translate-x-0.5 transition-transform duration-200"
          onClick={() => navigate("/products")}
        >
          Products
        </span>{" "}
        /{" "}
        <span className="cursor-pointer hover:text-indigo-700 italic">
          {title}
        </span>
      </h1>
    </div>
  );
};

export default BreadCrums;
