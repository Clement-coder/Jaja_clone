"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#f6f3ee] min-h-screen font-sans overflow-hidden">
      
      {/* NAVBAR */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center px-6 md:px-10 py-5 bg-white shadow-sm"
      >
        <div className="text-lg md:text-xl font-bold text-green-700">
          COWCARE
        </div>

        <nav className="hidden md:flex gap-8 text-gray-700">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
        </nav>

        <button className="bg-green-700 text-white px-4 md:px-5 py-2 rounded-md text-sm md:text-base">
          Sign In
        </button>
      </motion.header>

      {/* HERO */}
      <section className="grid md:grid-cols-2 items-center px-6 md:px-10 py-12 md:py-16 gap-10">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Premium Cow Feed <br /> for Better Milk Health
          </h1>

          <p className="mt-4 md:mt-6 text-gray-600 max-w-md text-sm md:text-base">
            Providing high-quality organic feed to improve milk production
            and keep your cattle healthy and strong.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8">
            <button className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full w-full sm:w-auto transition-colors shadow-md">
              {/* Cart icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
              Shop Now
            </button>

            <button className="flex items-center justify-center gap-2 border-2 border-green-700 text-green-700 hover:bg-green-50 px-6 py-3 rounded-full w-full sm:w-auto transition-colors">
              {/* Info icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
              </svg>
              Know More
            </button>
          </div>

          {/* STATS */}
          <div className="flex justify-between sm:justify-start sm:gap-10 mt-10 md:mt-12 text-center sm:text-left">
            {[
              { value: "100k+", label: "Happy Farmers" },
              { value: "25%", label: "Milk Increase" },
              { value: "100%", label: "Organic" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h2 className="text-xl md:text-2xl font-bold">
                  {item.value}
                </h2>
                <p className="text-gray-500 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="bg-green-200 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] rounded-full absolute"></div>

          <Image
            src="/cow.jpg"
            alt="Cow"
            width={400}
            height={400}
            className="relative z-10 object-contain w-[260px] sm:w-[320px] md:w-[400px]"
          />
        </motion.div>
      </section>

      {/* BOTTOM BANNER */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-green-700 text-white px-6 md:px-10 py-6 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center text-center md:text-left"
      >
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
          <p className="text-sm md:text-base">Our Happy Clients</p>
        </div>

        <div className="font-semibold text-sm md:text-base">
          Healthy Life With Fresh Products
        </div>

        <div className="text-xs md:text-sm opacity-80">
          Trusted by thousands of farmers
        </div>
      </motion.section>
    </main>
  );
}