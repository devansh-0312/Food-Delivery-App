import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaStar } from "react-icons/fa";

function RestaurantCard({ restaurant }) {
  const { darkMode } = useContext(ThemeContext);

  const img = ["/CafeImg.avif", "/Cafe.avif", "/Dine.avif", "/Cafe2.avif", "/Cafe3.avif", "/Cafe4.avif", "/Cafe5.avif", "/Bar.avif"];

  const cardBase = darkMode
    ? "rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition bg-slate-800 border border-slate-700"
    : "rounded-xl overflow-hidden shadow hover:shadow-lg transform hover:scale-105 transition bg-white border border-gray-100";

  const minPrice = restaurant.menu?.reduce((min, it) => (it.price < min ? it.price : min), restaurant.menu[0]?.price ?? 0);

  return (
    <Link to={`/restaurants/${restaurant.id}`} className="block">
      <div className={cardBase}>
        <div className="relative h-40 w-full">
          <img src={img[Math.floor(Math.random() * img.length)]} alt={restaurant.name} className="object-cover w-full h-full" />
          <div className="absolute flex items-center gap-2 top-3 left-3 bg-black/40 text-white text-xs px-2 py-1 rounded">{restaurant.rating} <FaStar size={10} fill="gold"/></div>
          <div className="absolute top-3 right-3 bg-white/70 text-slate-800 text-xs px-2 py-1 rounded backdrop-blur-sm">{restaurant.menu?.length} items</div>
        </div>
        <div className="p-4">
          <h3 className={darkMode ? "text-lg font-bold text-slate-100 truncate" : "text-lg font-bold text-slate-800 truncate"}>{restaurant.name}</h3>
          <p className={darkMode ? "text-sm text-slate-300 mt-1" : "text-sm text-slate-500 mt-1"}>{restaurant.cuisine ?? (restaurant.menu && restaurant.menu[0]?.name) }</p>
          <div className="mt-3 flex items-center justify-between">
            <span className={darkMode ? "text-sm font-semibold text-slate-100" : "text-sm font-semibold text-slate-800"}>&#8377; {minPrice}</span>
            {
              (() => {
                const orderBtnClass = darkMode
                  ? "px-4 py-2 rounded-full text-sm font-semibold text-slate-100 bg-gradient-to-r from-purple-700 to-indigo-700 shadow hover:scale-105 transition-transform"
                  : "px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow hover:scale-105 transition-transform";
                return <button className={orderBtnClass}>Order</button>;
              })()
            }
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RestaurantCard;