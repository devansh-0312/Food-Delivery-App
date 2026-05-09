import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";
import { FaPlus, FaMinus, FaShoppingCart, FaCheck } from "react-icons/fa";

function FoodItem({ item }) {
  const { addToCart } = useContext(CartContext);
  const { darkMode } = useContext(ThemeContext);
  const [quantity, setQuantity] = useState(0);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ ...item, quantity });
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
        setQuantity(0);
      }, 2000);
    }
  };

  const itemBg = darkMode
    ? "bg-slate-800/70 border border-slate-700 text-slate-100 hover:bg-slate-700/70"
    : "bg-white border border-orange-100 text-slate-800 hover:shadow-md";

  return (
    <div
      className={`h-full flex flex-col justify-between p-4 rounded-xl transition ${itemBg}`}
    >
      {/* TOP SECTION */}
      <div className="flex gap-4">

        {/* IMAGE */}
        {item.image && (
          <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-slate-200">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        )}

        {/* TEXT */}
        <div className="flex flex-col justify-between flex-1 min-h-[96px]">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1">
              {item.name}
            </h3>

            <p
              className={`mt-1 text-sm line-clamp-2 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Fresh and delicious
            </p>
          </div>

          <p
            className={`mt-2 ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            ₹{" "}
            <span className="text-xl font-bold text-orange-500">
              {item.price}
            </span>
          </p>
        </div>
      </div>

      {/* BOTTOM SECTION (ALWAYS ALIGNED) */}
      <div className="mt-4 flex items-center justify-between">

        {/* Quantity Controls */}
        {!added && (
          <div
            className={`flex items-center gap-2 ${
              darkMode ? "bg-slate-700/60" : "bg-orange-100"
            } rounded-full px-3 py-2`}
          >
            <button
              onClick={() => setQuantity(Math.max(0, quantity - 1))}
              className={`p-1 rounded-full transition ${
                darkMode ? "hover:bg-slate-600" : "hover:bg-orange-200"
              }`}
            >
              <FaMinus size={14} />
            </button>

            <span className="w-8 text-center font-semibold">
              {quantity}
            </span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              className={`p-1 rounded-full transition ${
                darkMode ? "hover:bg-slate-600" : "hover:bg-orange-200"
              }`}
            >
              <FaPlus size={14} />
            </button>
          </div>
        )}

        {/* Add Button */}
        <button
          onClick={handleAddToCart}
          disabled={quantity === 0 || added}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition transform whitespace-nowrap ${
            added
              ? darkMode
                ? "bg-green-700 text-green-100 shadow-lg shadow-green-700/50"
                : "bg-green-500 text-white shadow-lg shadow-green-500/50"
              : quantity === 0
              ? darkMode
                ? "bg-slate-700/50 text-slate-400 cursor-not-allowed"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
              : darkMode
              ? "bg-gradient-to-r from-purple-700 to-indigo-700 text-indigo-100 hover:from-purple-600 hover:to-indigo-600 active:scale-95"
              : "bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 active:scale-95"
          }`}
        >
          {added ? (
            <>
              <FaCheck size={16} /> Added
            </>
          ) : (
            <>
              <FaShoppingCart size={16} /> Add
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default FoodItem;