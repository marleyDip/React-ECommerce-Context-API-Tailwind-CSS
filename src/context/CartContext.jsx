import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const itemInCart = cartItem.find((item) => item.id === product.id);

    if (itemInCart) {
      // increasing quantity if already in cart
      const updateCart = cartItem.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItem(updateCart);
    } else {
      // add new item with quantity  1
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
    //setCartItem([...cartItem, product]);
  };

  const updateQuantity = (cartItem, productId, action) => {
    setCartItem(
      cartItem
        .map((item) => {
          if (item.id === productId) {
            let newUnit = item.quantity;
            if (action === "increase") {
              newUnit = newUnit + 1;
            } else if (action === "decrease") {
              newUnit = newUnit - 1;
            }
            return newUnit > 0 ? { ...item, quantity: newUnit } : null;
          }
          return item;
        })
        .filter((item) => item != null) // remove item quantity 0
    );
  };

  //better approach for update quantity => don't pass cartItem as a parameter, use the state  directly
  const updateQty = (productId, action) => {
    setCartItem(
      (prevCart) =>
        prevCart
          .map((item) => {
            if (item.id === productId) {
              let newUnit = item.quantity;

              if (action === "increase") newUnit++;
              if (action === "decrease") newUnit--;

              // Readability - simplified using math.max for safety

              const newUnitSafety =
                action === "increase"
                  ? item.quantity + 1
                  : Math.max(item.quantity - 1, 0);

              return newUnit > 0 ? { ...item, quantity: newUnit } : null;
            }
            return item;
          })
          .filter(Boolean) // shorthand for remove null
    );
  };

  const deleteItem = (productId) => {
    setCartItem(cartItem.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{ cartItem, setCartItem, addToCart, updateQuantity, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
