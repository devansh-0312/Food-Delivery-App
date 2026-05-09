import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQty } = useContext(CartContext);
  const { darkMode } = useContext(ThemeContext);

  const qty = item.quantity ?? item.qty ?? 0;
  const itemBg = darkMode
    ? "bg-slate-800/70 border border-slate-700 text-slate-100"
    : "bg-white border border-orange-100 text-slate-800";

  return (
    <div className={`flex gap-4 p-4 rounded-xl items-center ${itemBg}`}>
      <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-200 flex-shrink-0">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sm">No Image</div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-lg truncate">{item.name}</h4>
        <p className={`text-sm mt-1 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
          Fresh & tasty
        </p>
        <div className="mt-2 flex items-center justify-between">
          <div className={`rounded-full flex items-center gap-2 px-2 py-1 ${darkMode ? "bg-slate-700/60" : "bg-orange-100"}`}>
            <button onClick={() => updateQty(item.id, "dec")} className="p-1 rounded-full">
              <FaMinus size={12} />
            </button>
            <span className="w-6 text-center font-semibold">{qty}</span>
            <button onClick={() => updateQty(item.id, "inc")} className="p-1 rounded-full">
              <FaPlus size={12} />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className={`${darkMode ? "text-slate-300" : "text-slate-800"} font-bold`}>₹{item.price}</div>
            <div className="text-sm text-slate-400">Sub: ₹{(item.price * qty).toFixed(0)}</div>
            <button onClick={() => removeFromCart(item.id)} className="p-2 rounded-md text-red-500 hover:bg-red-50">
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;