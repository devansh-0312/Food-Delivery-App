import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaUtensils,
} from "react-icons/fa";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/restaurants", label: "Restaurants" },
  { to: "/cart", label: "Cart" },
  { to: "/contact", label: "Contact" },
];

function Footer() {
  const { darkMode } = useContext(ThemeContext);

  const footerBg = darkMode
    ? "bg-gradient-to-r from-slate-950 via-purple-950 to-indigo-950 border-t border-purple-800/40"
    : "bg-gradient-to-r from-orange-500 via-red-400 to-pink-500 border-t border-white/20";

  const cardClass = darkMode
    ? "bg-white/5 border border-white/10 backdrop-blur-xl"
    : "bg-white/15 border border-white/25 backdrop-blur-xl";

  const textMuted = darkMode ? "text-slate-300" : "text-white/85";
  const titleClass = darkMode ? "text-indigo-100" : "text-white";
  const linkClass = darkMode
    ? "text-slate-300 hover:text-white"
    : "text-white/85 hover:text-yellow-100";
  const badgeClass = darkMode
    ? "bg-purple-900/70 text-indigo-100 border border-purple-700/60"
    : "bg-white/20 text-white border border-white/30";

  return (
    <footer className={`relative overflow-hidden ${footerBg}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.12),_transparent_30%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-14">
        <div className={`rounded-[2rem] p-8 md:p-10 shadow-2xl ${cardClass}`}>
          <div className="grid gap-8 md:grid-cols-[1.3fr_0.9fr_1fr]">
            <div>
              <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${badgeClass}`}>
                <FaUtensils />
                Flavor delivered daily
              </div>
              <h2 className={`mt-5 text-3xl font-extrabold ${titleClass}`}>
                FoodEngine
              </h2>
              <p className={`mt-3 max-w-md text-sm leading-6 ${textMuted}`}>
                Fast delivery, standout restaurants, and a polished ordering
                experience that feels the same from first click to checkout.
              </p>
            </div>

            <div>
              <h3 className={`text-lg font-bold ${titleClass}`}>Quick Links</h3>
              <div className="mt-4 flex flex-col gap-3 text-sm font-medium">
                {quickLinks.map((link) => (
                  <Link key={link.label} to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className={`text-lg font-bold ${titleClass}`}>Contact</h3>
              <div className={`mt-4 space-y-3 text-sm ${textMuted}`}>
                <p className="flex items-center gap-3">
                  <FaPhone className={titleClass} />
                  +91 98765 43210
                </p>
                <p className="flex items-center gap-3">
                  <FaEnvelope className={titleClass} />
                  hello@foodengine.dev
                </p>
                <p className="flex items-center gap-3">
                  <FaMapMarkerAlt className={titleClass} />
                  Kolkata, India
                </p>
                <p className="flex items-center gap-3">
                  <FaInstagram className={titleClass} />
                  @foodengine.app
                </p>
              </div>
            </div>
          </div>

          <div
            className={`mt-8 flex flex-col gap-3 border-t pt-6 text-sm md:flex-row md:items-center md:justify-between ${
              darkMode ? "border-white/10" : "border-white/20"
            } ${textMuted}`}
          >
            <p>© 2026 FoodEngine. Crafted for cravings.</p>
            <p>Fresh menus. Smooth checkout. Consistent design.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
