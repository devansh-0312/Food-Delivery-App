import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import data from "../data/SampleData";
import FoodItem from "../components/FoodItem";
import { ThemeContext } from "../context/ThemeContext";
import { FaArrowLeft, FaStar, FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";

function Restaurant() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  const restaurant = data.find((r) => r.id === parseInt(id));

  if (!restaurant) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-slate-800"
      }`}>
        <p className="text-xl font-semibold">Restaurant not found</p>
      </div>
    );
  }

  const heroImages = ["/CafeImg.avif", "/Cafe.avif", "/Dine.avif", "/Cafe2.avif", "/Cafe3.avif"];
  const heroImage = heroImages[restaurant.id % heroImages.length];

  return (
    <main
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100"
          : "bg-gradient-to-br from-gray-100 via-white to-orange-50 text-slate-900"
      }`}
    >

      {/* 🔥 HERO */}
      <div className="relative h-[320px] w-full overflow-hidden">
        <img
          src={heroImage}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />

        {/* Theme-aware overlay */}
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gradient-to-r from-black/80 via-black/50 to-transparent"
              : "bg-gradient-to-r from-black/60 via-black/30 to-transparent"
          }`}
        />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-10 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition"
        >
          <FaArrowLeft />
        </button>

        {/* Restaurant Info */}
        <div className="absolute bottom-8 left-8 z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            {restaurant.name}
          </h1>

          <div className="flex gap-5 text-sm text-white/90">
            <span className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              {restaurant.rating}
            </span>
            <span className="flex items-center gap-1">
              <FaClock /> 30 mins
            </span>
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt /> Nearby
            </span>
          </div>
        </div>
      </div>

      {/* 🔥 FLOATING CARD */}
      <div className="max-w-6xl mx-auto px-6 -mt-14 relative z-10">

        <div
          className={`rounded-3xl p-6 shadow-xl backdrop-blur-md ${
            darkMode
              ? "bg-slate-900/70 border border-purple-800/30 shadow-purple-900/20"
              : "bg-white border border-orange-100"
          }`}
        >

          <p className={`text-sm max-w-2xl mb-4 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}>
            Enjoy freshly prepared dishes made with premium ingredients and fast delivery.
          </p>

          {/* Divider */}
          <div className={`h-[1px] w-full mb-6 ${
            darkMode ? "bg-slate-800" : "bg-gray-200"
          }`} />

          {/* MENU HEADER */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Menu</h2>
              <p className={`text-sm ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}>
                {restaurant.menu.length} items available
              </p>
            </div>
          </div>

          {/* 🔥 ITEMS CONTAINER */}
          <div
            className={`rounded-2xl p-4 ${
              darkMode
                ? "bg-slate-950/60 border border-slate-800"
                : "bg-gradient-to-br from-orange-50 via-white to-pink-50"
            }`}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {restaurant.menu.map((item) => (
                <div
                  key={item.id}
                  className="transition duration-300 hover:-translate-y-2 hover:shadow-2xl rounded-xl"
                >
                  <FoodItem item={item} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 🔥 FOOTER */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div
          className={`grid md:grid-cols-3 gap-6 text-sm ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          <div className="flex items-center gap-2">
            <FaPhone />
            <span>+91-XXXXX-XXXXX</span>
          </div>

          <div className="flex items-center gap-2">
            <FaClock />
            <span>10:00 AM - 11:00 PM</span>
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>Downtown Food Court</span>
          </div>
        </div>
      </div>

    </main>
  );
}

export default Restaurant;