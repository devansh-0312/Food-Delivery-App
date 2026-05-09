import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const { darkMode } = useContext(ThemeContext);

  // Theme tokens
  const bgClass = darkMode
    ? "bg-gradient-to-br from-[#0b1220] via-[#020617] to-black text-white"
    : "bg-gradient-to-br from-orange-50 via-white to-pink-50 text-slate-800";

  const cardClass = darkMode
    ? "bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
    : "bg-white border border-orange-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)]";

  const inputClass = darkMode
    ? "bg-white/5 text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500"
    : "bg-white text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-orange-400";

  const buttonClass = darkMode
    ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
    : "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600";

  const iconWrapClass = darkMode
    ? "bg-indigo-500/10 text-indigo-400"
    : "bg-orange-100 text-orange-500";

  const subText = darkMode ? "text-slate-400" : "text-slate-600";

  return (
    <main className={`min-h-screen ${bgClass}`}>
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1
            className={`text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent ${
              darkMode
                ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
                : "bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500"
            }`}
          >
            Get in Touch
          </h1>
          <p className={`mt-5 text-lg max-w-2xl mx-auto ${subText}`}>
            Have questions, feedback, or partnership ideas? We’re here to help.
            Reach out and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div className="space-y-6">
            {[
              { icon: <FaPhone />, label: "Phone", value: "+1 (555) 123-4567" },
              { icon: <FaEnvelope />, label: "Email", value: "support@foodengine.example" },
              { icon: <FaMapMarkerAlt />, label: "Office", value: "123 Food Lane, Flavor Town" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`flex items-center gap-5 p-6 rounded-2xl ${cardClass}`}
              >
                <div className={`p-3 rounded-xl ${iconWrapClass}`}>
                  <div className="text-xl">{item.icon}</div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-60">
                    {item.label}
                  </p>
                  <h3 className="text-base font-semibold">{item.value}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`p-10 rounded-[1.75rem] ${cardClass}`}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Send a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="text-sm opacity-70">Full Name</label>
                <input
                  className={`w-full mt-2 px-4 py-3 rounded-xl outline-none transition ${inputClass}`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="text-sm opacity-70">Email Address</label>
                <input
                  className={`w-full mt-2 px-4 py-3 rounded-xl outline-none transition ${inputClass}`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="text-sm opacity-70">Message</label>
                <textarea
                  rows={5}
                  className={`w-full mt-2 px-4 py-3 rounded-xl outline-none transition ${inputClass}`}
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="button"
                className={`w-full py-3 rounded-xl text-white font-medium text-lg shadow-lg transition-transform hover:scale-[1.02] ${buttonClass}`}
              >
                Send Message
              </button>

              <p className={`text-xs text-center mt-3 ${subText}`}>
                We respect your privacy. Your information will not be shared.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
