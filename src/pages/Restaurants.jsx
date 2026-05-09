import { useContext } from "react";
import data from "../data/SampleData";
import RestaurantCard from "../components/RestaurantCard";
import { ThemeContext } from "../context/ThemeContext";

function Restaurants() {
  const { darkMode } = useContext(ThemeContext);

  // show first 12 restaurants (or fewer if data is smaller)
  const list = data.slice(0, 12);

  return (
    <main
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100"
          : "bg-gradient-to-br from-gray-100 via-white to-orange-50 text-slate-900"
      }`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img src="/Cafe4.avif" alt="Restaurants" className="w-full h-full object-cover" />
        <div className={`absolute inset-0 ${darkMode ? "bg-black/50" : "bg-black/30"}`} />
        <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Discover Restaurants</h1>
            <p className="mt-2 text-white/90">Popular places near you — curated just for cravings</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className={`rounded-3xl p-6 shadow-xl backdrop-blur-md ${darkMode ? "bg-slate-900/70 border border-purple-800/30" : "bg-white border border-orange-100"}`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Popular Restaurants</h2>
              <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{list.length} places</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((r) => (
              <RestaurantCard key={r.id} restaurant={r} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Restaurants;
