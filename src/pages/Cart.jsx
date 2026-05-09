import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";
import CartItem from "../components/CartItem";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const { cart } = useContext(CartContext);
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity ?? item.qty ?? 0),
    0
  );

  return (
    <main
      className={`min-h-screen transition-all duration-300 ${darkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100"
          : "bg-gradient-to-br from-gray-100 via-white to-orange-50 text-slate-900"
        }`}
    >
      {/* 🔥 HERO */}
      {/* 🔥 PREMIUM HERO */}
      <div className="relative h-60 w-full overflow-hidden">

        {/* Background gradient glow */}
        <div
          className={`absolute inset-0 ${darkMode
              ? "bg-gradient-to-br from-indigo-900 via-purple-900 to-black"
              : "bg-gradient-to-br from-orange-400 via-pink-400 to-yellow-300"
            }`}
        />

        {/* Glass overlay */}
        <div className="absolute inset-0 backdrop-blur-[40px] bg-black/20" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-between px-6">

          {/* LEFT SECTION */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition shadow-md"
            >
              <FaArrowLeft />
            </button>

            {/* Icon + Text */}
            <div className="flex items-center gap-4">

              {/* Icon Badge */}
              <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-md shadow-lg">
                <FaShoppingCart className="text-2xl text-white" />
              </div>

              {/* Text */}
              <div>
                <h1 className="text-4xl font-extrabold text-white tracking-tight">
                  Your Cart
                </h1>

                <p className="text-sm text-white/80 mt-1">
                  Review your items and proceed to checkout effortlessly
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE DECOR */}
          <div className="hidden md:flex flex-col items-end text-white/80">
            <span className="text-sm">Items</span>
            <span className="text-2xl font-bold">
              {cart.reduce((s, it) => s + (it.quantity ?? it.qty ?? 0), 0)}
            </span>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-10">
        <div
          className={`rounded-3xl p-6 shadow-xl backdrop-blur-md ${darkMode
              ? "bg-slate-900/70 border border-purple-800/30 shadow-purple-900/20"
              : "bg-white border border-orange-100"
            }`}
        >
          <div className="grid lg:grid-cols-3 gap-8">

            {/* 🔥 CART ITEMS */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-5">
                Items in your cart
              </h2>

              {cart.length === 0 ? (
                <div
                  className={`p-8 rounded-2xl flex flex-col items-center justify-center text-center ${darkMode
                      ? "bg-slate-800/60 border border-slate-700"
                      : "bg-orange-50 border border-orange-200"
                    }`}
                >
                  <FaShoppingCart className="text-4xl mb-3 opacity-60" />
                  <p className="font-semibold text-lg">
                    Your cart is empty
                  </p>
                  <p className="text-sm opacity-70">
                    Add some delicious items 🍕
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="transition hover:scale-[1.01]"
                    >
                      <CartItem item={item} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 🔥 ORDER SUMMARY */}
            <aside>
              <div
                className={`rounded-2xl p-5 sticky top-24 ${darkMode
                    ? "bg-slate-950/70 border border-purple-800/30 shadow-lg shadow-purple-900/20"
                    : "bg-gradient-to-br from-orange-50 via-white to-pink-50 border border-orange-100 shadow-md"
                  }`}
              >
                <h3 className="text-xl font-bold mb-4">
                  Order Summary
                </h3>

                <div className="flex justify-between text-sm mb-2">
                  <span className="opacity-70">Items</span>
                  <span className="font-semibold">
                    {cart.reduce(
                      (s, it) => s + (it.quantity ?? it.qty ?? 0),
                      0
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-sm mb-3">
                  <span className="opacity-70">Subtotal</span>
                  <span className="font-bold text-lg">
                    ₹{total.toFixed(0)}
                  </span>
                </div>

                {/* Divider */}
                <div
                  className={`h-[1px] my-4 ${darkMode ? "bg-slate-800" : "bg-gray-200"
                    }`}
                />

                {/* CTA */}
                <Link to="/" className="cursor-pointer"><button
                  className={`w-full px-4 py-3 rounded-full font-semibold transition transform hover:scale-105 ${darkMode
                      ? "bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-lg shadow-purple-900/40"
                      : "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-300/50"
                    }`}
                >
                  Proceed to Checkout
                </button></Link>

                <p className="text-xs text-center mt-3 opacity-60">
                  Secure payments • Fast delivery
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;