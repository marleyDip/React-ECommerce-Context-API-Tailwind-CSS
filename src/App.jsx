import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import CategoryProduct from "./pages/CategoryProduct";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import About from "./pages/About";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "./context/CartContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [location, setLocation] = useState();
  const [openDropDown, setOpenDropDown] = useState(false);
  const { cartItem, setCartItem } = useCart();

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      //console.log(latitude, longitude);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

      try {
        const location = await axios.get(url);
        //console.log(location);

        const exactLocation = location.data.address;
        setLocation(exactLocation);
        setOpenDropDown(false);
        //console.log(exactLocation);
      } catch (error) {
        console.log(error);
      }
    });
  };

  /* const getLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            const { latitude, longitude } = pos.coords;
            const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

            const { data } = await axios.get(url);
            const exactLocation = data.address;

            setLocation(exactLocation);
            setOpenDropDown(false);
            //console.log(exactLocation);

            resolve(exactLocation);
          } catch (err) {
            console.error(err);
            reject(err);
          }
        },
        (err) => reject(err) // handle geolocation error (user deny, etc.)
      );
    });
  }; */

  /* //Load cart from local storage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart && storedCart !== "undefined") {
      try {
        setCartItem(JSON.parse(storedCart));
      } catch (error) {
        console.error("Error parsing cartItem from localStorage:", error);
        setCartItem([]); // reset if corrupted
      }
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    if (cartItem !== undefined) {
      localStorage.setItem("cartItems", JSON.stringify(cartItem));
    }
  }, [cartItem]); */

  useEffect(() => {
    getLocation();
  }, []);

  //Load cart from local storage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");
    if (storedCart) {
      setCartItem(JSON.parse(storedCart));
    }
  }, []);

  //save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        openDropDown={openDropDown}
        setOpenDropDown={setOpenDropDown}
      />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/products" element={<Products />}></Route>

        <Route path="/products/:id" element={<SingleProduct />}></Route>

        <Route path="/category/:category" element={<CategoryProduct />}></Route>

        <Route path="/about" element={<About />}></Route>

        <Route path="/contact" element={<Contact />}></Route>

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart location={location} getLocation={getLocation} />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
