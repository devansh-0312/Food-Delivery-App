import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === newItem.id);
      if (exists) {
        return prev.map((i) =>
          i.id === newItem.id
            ? { ...i, quantity: (i.quantity || i.qty || 0) + (newItem.quantity || newItem.qty || 0) }
            : i
        );
      }
      // normalize field to `quantity`
      return [...prev, { ...newItem, quantity: newItem.quantity || newItem.qty || 0 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, action) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id !== id) return item;
          const current = item.quantity ?? item.qty ?? 0;
          const next = action === "inc" ? current + 1 : Math.max(0, current - 1);
          return { ...item, quantity: next };
        })
        .filter((item) => (item.quantity ?? item.qty ?? 0) > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty }}>
      {children}
    </CartContext.Provider>
  );
};