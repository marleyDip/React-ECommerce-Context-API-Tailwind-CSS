import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotebook } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { ImPriceTags } from "react-icons/im";

import { useCart } from "../context/CartContext";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

import emptyCart from "../assets/empty-cart.png";

const Cart = ({ location, getLocation }) => {
  const { user } = useUser();
  //console.log(user);
  const navigate = useNavigate();

  const { cartItem, updateQuantity, deleteItem } = useCart();
  //console.log(cartItem)

  const totalPrice = cartItem.reduce(
    (total, item) => total + (item.price - item.discount) * item.quantity,
    0
  );

  const totalItem = cartItem.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5 px-4 md:px-0">
      {cartItem.length > 0 ? (
        <div>
          <h1 className="font-bold text-2xl">My Cart({cartItem.length})</h1>

          {/* product info */}
          <div className="mt-10">
            {cartItem.map((item, index) => {
              return (
                <div
                  key={index}
                  className="max-w-6xl md:w-full bg-gray-100 p-3 md:p-5 rounded-md shadow-md mt-0 md:mt-3 flex items-center justify-between"
                >
                  {/* img & info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 rounded-md shadow-md"
                    />

                    <div>
                      <h1 className="line-clamp-1 md:w-[300px] md:line-clamp-2">
                        {item.title}
                      </h1>

                      <div className="flex items-center justify-start gap-5">
                        <p className="text-red-500 font-semibold text-base md:text-lg">
                          BDT {item.price - item.discount}
                        </p>

                        <p className="text-blue-500 font-semibold text-base md:hidden">
                          BDT {(item.price - item.discount) * item.quantity}
                        </p>
                      </div>

                      <div className="flex items-center justify-start gap-4">
                        {/* increase & decrease btn */}
                        <div className="md:hidden">
                          <div className="bg-red-500 text-white flex gap-2 px-2 py-1 rounded-full shadow-md hover:shadow-xl font-semibold text-base">
                            <button
                              className="cursor-pointer"
                              onClick={() =>
                                updateQuantity(cartItem, item.id, "decrease")
                              }
                            >
                              -
                            </button>

                            <span>{item.quantity}</span>

                            <button
                              className="cursor-pointer"
                              onClick={() =>
                                updateQuantity(cartItem, item.id, "increase")
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                        {/* increase & decrease btn */}

                        {/* delete btn */}
                        <div className="md:hidden flex">
                          <span
                            className="p-2 rounded-full hover:shadow-2xl hover:bg-white/60 transition-all"
                            onClick={() => deleteItem(item.id)}
                          >
                            <FaRegTrashAlt className="text-red-500 text-xl cursor-pointer" />
                          </span>
                        </div>
                        {/* delete btn */}
                      </div>
                    </div>
                  </div>
                  {/* img & info */}

                  {/* increase & decrease btn */}
                  <div className="hidden md:block">
                    <div className="bg-red-500 text-white flex gap-4 px-4 py-2 rounded-full shadow-md hover:shadow-xl font-bold text-xl">
                      <button
                        className="cursor-pointer"
                        onClick={() =>
                          updateQuantity(cartItem, item.id, "decrease")
                        }
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        className="cursor-pointer"
                        onClick={() =>
                          updateQuantity(cartItem, item.id, "increase")
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* increase & decrease btn */}

                  <p className="text-blue-500 font-semibold text-lg md:block hidden">
                    BDT {(item.price - item.discount) * item.quantity}
                  </p>

                  {/* delete btn */}
                  <div className="md:block hidden">
                    <span
                      className="p-3 rounded-full hover:shadow-2xl hover:bg-white/60 transition-all"
                      onClick={() => deleteItem(item.id)}
                    >
                      <FaRegTrashAlt className="text-red-500 text-2xl cursor-pointer" />
                    </span>
                  </div>
                  {/* delete btn */}
                </div>
              );
            })}
          </div>
          {/* product info */}

          {/* delivery info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-20">
            {/* address */}
            <div className="bg-gray-100 p-7 mt-4 space-y-2 rounded-md">
              <h1 className="text-gray-800 font-bold text-xl">Delivery Info</h1>

              <div className="flex flex-col space-y-1">
                <label htmlFor="">Full Name</label>

                <input
                  type="text"
                  value={user.fullName}
                  placeholder="Enter Your Name"
                  className="p-2 rounded-md"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="">Address</label>

                <input
                  type="text"
                  value={`${location.city}, ${location.state_district}`}
                  placeholder="Enter Your Address"
                  className="p-2 rounded-md"
                />
              </div>

              <div className="flex w-full gap-5">
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor="">State</label>

                  <input
                    type="text"
                    value={location.state}
                    placeholder="Enter Your State"
                    className="p-2 rounded-md w-full"
                  />
                </div>

                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor="">PostCode</label>

                  <input
                    type="Number"
                    value={location.postcode}
                    placeholder="Enter Your PostCode"
                    className="p-2 rounded-md w-full"
                  />
                </div>
              </div>

              <div className="flex w-full gap-5">
                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor="">Country</label>

                  <input
                    type="text"
                    value={location.country}
                    /* value={[location.state, location.country]
                      .filter(Boolean)
                      .join(", ")} */
                    placeholder="Enter Your Country Name"
                    className="p-2 rounded-md w-full"
                  />
                </div>

                <div className="flex flex-col space-y-1 w-full">
                  <label htmlFor="">Phone</label>

                  <input
                    type="number"
                    placeholder="Enter Your Phone Number"
                    className="p-2 rounded-md w-full"
                  />
                </div>
              </div>

              <button className="bg-gradient-to-tl from-orange-500 via-rose-500 to-pink-500 hover:bg-gradient-to-br text-white px-3 py-1 mt-3 font-semibold rounded-md shadow-md hover:rounded-lg hover:shadow-lg cursor-pointer">
                Submit
              </button>

              <div className="flex items-center justify-center w-full text-gray-700">
                ******OR******
              </div>

              <div className="flex justify-center">
                <button
                  className="bg-gradient-to-bl from-orange-500 via-rose-500 to-pink-500 hover:bg-gradient-to-tr text-white px-3 py-1 font-semibold rounded-md shadow-md hover:rounded-lg hover:shadow-lg cursor-pointer"
                  onClick={getLocation}
                >
                  Detect Location
                </button>
              </div>
            </div>
            {/* address */}

            {/* bill details */}
            <div className="p-7 mt-4 h-max space-y-2 bg-white border border-gray-100 shadow-xl rounded-md">
              <h1 className="text-gray-800 font-bold text-xl">Bill Details</h1>

              <div className="flex items-center justify-between">
                <h1 className="flex gap-1 items-center text-gray-700 font-semibold">
                  <span>
                    <LuNotebook />
                  </span>
                  Total Items
                </h1>

                <p className="font-semibold">{totalItem}</p>
              </div>

              <div className="flex items-center justify-between">
                <h1 className="flex gap-1 items-center text-gray-700 font-semibold">
                  <span>
                    <ImPriceTags />
                  </span>
                  Total Price
                </h1>

                <p className="font-semibold">BDT {totalPrice}</p>
              </div>

              <div className="flex items-center justify-between">
                <h1 className="flex gap-1 items-center text-gray-700 font-semibold">
                  <span>
                    <MdDeliveryDining />
                  </span>
                  Delivery Charge
                </h1>

                <p className="text-red-500 font-semibold">
                  <span className="text-gray-600 line-through">BDT 25</span>{" "}
                  Free
                </p>
              </div>

              <div className="flex items-center justify-between">
                <h1 className="flex gap-1 items-center text-gray-700 font-semibold">
                  <span>
                    <GiShoppingBag />
                  </span>
                  Handling Charge
                </h1>

                <p className="text-red-500 font-semibold">BDT 10</p>
              </div>

              <hr className="text-gray-200 mt-2" />

              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-lg">Grand Total</h1>

                <p className="font-semibold text-lg">BDT {totalPrice + 10}</p>
              </div>

              <div>
                <h1 className="font-semibold text-gray-700 mb-3 mt-7">
                  Apply Promo Code
                </h1>

                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter Code"
                    className="p-2 rounded-md w-full focus:ring-1 focus:outline-none focus:ring-amber-500"
                  />

                  <button className="bg-white text-black font-medium border-2 border-gray-200 hover:border-red-300 px-4 py-1 rounded-md shadow-md hover:rounded-lg hover:shadow-lg cursor-pointer">
                    Apply
                  </button>
                </div>
              </div>

              <button className="w-full px-3 py-2 mt-3 font-bold text-white bg-gradient-to-l from-lime-500 via-indigo-500 to-emerald-500 hover:bg-gradient-to-r rounded-lg shadow-lg hover:shadow-xl hover:rounded-xl cursor-pointer">
                Proceed to Checkout
              </button>
            </div>
            {/* bill details */}
          </div>
          {/* delivery info */}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[600px] gap-3">
          <h1 className="text-red-500/80 font-bold text-5xl text-muted">
            Oh No! Your Cart is Empty
          </h1>

          <img src={emptyCart} alt="Animation" className="w-[400px]" />

          <button
            className="px-3 py-2 bg-gradient-to-tr from-violet-500 via-cyan-600 to-teal-500 hover:bg-gradient-to-r text-white font-semibold rounded-md shadow-md  hover:rounded-lg hover:shadow-lg transform hover:-translate-x-1 hover:-translate-y-0.5 hover:scale-101  active:scale-95 transition-all duration-200 ease-in-out cursor-pointer"
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
