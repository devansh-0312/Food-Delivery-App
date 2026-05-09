import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";
import {
  FaHome,
  FaUtensils,
  FaPhone,
  FaUser,
  FaCartArrowDown,
  FaSun,
  FaMoon,
  FaCartPlus,
} from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Home", icon: <FaHome size={16} /> },
  { to: "/restaurants", label: "Restaurants", icon: <FaUtensils size={16} /> },
  { to: "/cart", label: "Cart", icon: <FaCartPlus size={16} /> },
  { to: "/contact", label: "Contact", icon: <FaPhone size={16} /> },
];

function Navbar() {
  const { cart } = useContext(CartContext);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const navBg = darkMode
    ? "bg-gradient-to-r from-slate-950 via-purple-900 to-indigo-950"
    : "bg-gradient-to-r from-orange-500 via-red-400 to-pink-500";

  const linkText = darkMode
    ? "text-indigo-200 hover:text-purple-300"
    : "text-white hover:text-yellow-200";

  const buttonStyle = darkMode
    ? "rounded-full cursor-pointer border border-purple-500 bg-purple-900/70 px-3 py-2 text-indigo-100 hover:bg-purple-800"
    : "rounded-full cursor-pointer bg-white/20 backdrop-blur-md px-3 py-2 text-white border border-white/30 hover:bg-white/30";

  const cartStyle = darkMode
    ? "relative flex items-center gap-2 px-5 py-2 rounded-full bg-purple-900/80 border border-purple-500 text-indigo-100 hover:bg-purple-800 transition"
    : "relative flex items-center gap-2 px-5 py-2 rounded-full bg-white text-orange-500 hover:bg-yellow-200 transition shadow";

  return (
    <nav className={`shadow-lg backdrop-blur-md ${navBg} sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-6">
        
        {/* Logo */}
        <Link
          to="/"
          className={`text-3xl font-extrabold ${
            darkMode
              ? "text-indigo-300 drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]"
              : "text-white"
          }`}
        >
          <div className="flex items-center gap-2">
            <FaUtensils /> FoodEngine
          </div>
        </Link>

        {/* Links */}
        <div className="hidden lg:flex gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`${linkText} flex items-center gap-2 text-sm font-semibold`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          
          {/* Dark Mode */}
          <button onClick={toggleDarkMode} className={buttonStyle}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Profile */}
          <Link to="/" className={buttonStyle}>
            <FaUser />
          </Link>

          {/* Cart */}
          <Link to="/cart" className={cartStyle}>
            <FaCartArrowDown /> Cart
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
              {cart.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;