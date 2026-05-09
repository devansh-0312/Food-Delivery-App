import { useState, useContext } from "react";
import data from "../data/SampleData";
import RestaurantCard from "../components/RestaurantCard";
import { FaSearch, FaUtensils, FaPercent, FaCookie, FaClock, FaStar } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Pizza", "Burgers", "Asian", "Desserts", "Snacks"];

  const filtered = data.filter((r) => {
    const matchesQuery = r.name.toLowerCase().includes(query.toLowerCase()) || r.cuisine?.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || (r.cuisine && r.cuisine.toLowerCase().includes(category.toLowerCase()));
    return matchesQuery && matchesCategory;
  });

  const { darkMode } = useContext(ThemeContext);

  const bgPath = "/CafeImg.avif";

  const mainClass = darkMode ? "min-h-screen text-slate-100 bg-fixed" : "min-h-screen text-slate-800 bg-fixed";

  const mainStyle = darkMode
    ? {
      backgroundImage: `linear-gradient(rgba(2,6,23,0.78), rgba(2,6,23,0.78)), url(${bgPath})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }
    : {
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };

  return (
    <main className={mainClass} style={mainStyle}>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className={darkMode ? "text-4xl md:text-5xl font-extrabold leading-tight text-white" : "text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-400 to-pink-500"}>
              Delicious meals, delivered fast
            </h1>
            <p className={darkMode ? "mt-4 text-lg text-slate-300" : "mt-4 text-lg text-slate-600"}>Browse nearby restaurants, discover new flavors, and get hot food at your door.</p>

            {/* Search */}
            <div className="mt-6 flex gap-3">
              <div className={`flex items-center w-full rounded-full ${darkMode ? "bg-slate-800/60 border border-slate-700" : "bg-white"} shadow px-4 py-2`}>
                <FaSearch className={`${darkMode ? "text-slate-300 mr-3" : "text-orange-400 mr-3"}`} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search restaurants or cuisine (e.g. pizza, sushi)"
                  className={darkMode ? "w-full outline-none text-sm bg-transparent placeholder-slate-400 text-slate-100" : "w-full outline-none text-sm bg-transparent placeholder-slate-500 text-slate-800"}
                />
              </div>
              <Link to="/cart" className={`hidden md:inline-flex items-center gap-2 rounded-full ${darkMode ? "text-slate-300 bg-gradient-to-r from-purple-700 to-indigo-700" : "text-white bg-gradient-to-r from-orange-500 to-pink-500"} px-5 py-2 shadow hover:scale-105 transition`}>
                <FaUtensils /> Order
              </Link>
            </div>

            {/* Categories */}
            <div className="mt-6 flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 cursor-pointer py-2 rounded-full text-sm font-semibold ${category === cat ? (darkMode ? "bg-gradient-to-r from-purple-700 to-indigo-700 text-indigo-100 shadow" : "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow") : (darkMode ? "bg-slate-800 text-slate-200 border border-slate-700" : "bg-white text-slate-700 border border-gray-200")}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Hero artwork / featured restaurants */}
          <div className="space-y-4">
            <div className={darkMode ? "rounded-2xl bg-gradient-to-r from-slate-800 via-purple-900 to-indigo-900 text-indigo-100 p-6 shadow-lg" : "rounded-2xl bg-gradient-to-r from-orange-400 to-pink-400 text-white p-6 shadow-lg"}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-xl">Top picks near you</h3>
                  <p className="text-sm opacity-90 mt-1">Handpicked restaurants with excellent ratings</p>
                </div>
                <div className="text-6xl leading-none"><FaUtensils size={34} /></div>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {data.slice(0, 3).map((r) => (
                  <div key={r.id} className={darkMode ? "bg-white/5 rounded p-3 border border-slate-700" : "bg-white/20 rounded p-3"}>
                    <h4 className={darkMode ? "font-semibold text-slate-100" : "font-semibold"}>{r.name}</h4>
                    <p className={darkMode ? "text-sm mt-1 flex items-center gap-3 text-slate-300" : "text-sm mt-1 flex items-center gap-3"}><FaStar fill="gold" size={16} /> {r.rating} • {r.cuisine}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <div className={darkMode ? "flex-1 rounded-xl bg-slate-800/60 p-4 shadow border border-slate-700 text-slate-100" : "flex-1 rounded-xl bg-white p-4 shadow"}>
                <div className="flex items-center gap-3">
                  <FaPercent size={20} className={(darkMode ? "text-indigo-100 shadow" : " text-orange-500")} />
                  <div>
                    <p className="font-semibold">Special discounts</p>
                    <p className={darkMode ? "text-sm text-slate-300" : "text-sm text-slate-600"}>Save on your first order</p>
                  </div>
                </div>
              </div>
              <div className={darkMode ? "flex-1 rounded-xl bg-slate-800/60 p-4 shadow border border-slate-700 text-slate-100" : "flex-1 rounded-xl bg-white p-4 shadow"}>
                <div className="flex items-center gap-3">
                  <FaClock size={20} className={(darkMode ? "text-indigo-100 shadow" : " text-orange-500")} />
                  <div>
                    <p className="font-semibold">Fast delivery</p>
                    <p className={darkMode ? "text-sm text-slate-300" : "text-sm text-slate-600"}>Under 30 minutes in most areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Restaurants</h2>
          <p className={`text-sm ${darkMode ? "text-white" : "text-slate-600"}`}>{filtered.length} results {category === "All" && <Link to="/restaurants" className={(darkMode ? "text-blue-500 shadow" : " text-orange-500")}>| See More</Link>}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(0, 3).map((res) => (
            <RestaurantCard key={res.id} restaurant={res} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;