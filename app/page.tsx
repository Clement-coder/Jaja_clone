"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#f6f3ee] min-h-screen font-sans flex flex-col">

      {/* NAVBAR */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center px-10 md:px-20 py-5 bg-white shadow-sm"
      >
        <div className="text-lg md:text-xl font-bold text-green-800">COWCARE</div>

        <nav className="hidden md:flex gap-8 text-gray-700">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
        </nav>

        <button className="flex items-center gap-2 bg-green-800 text-white px-4 md:px-5 py-2 rounded-md text-sm md:text-base">
          Sign In
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </motion.header>

      {/* HERO */}
      <section className="flex-1 grid md:grid-cols-2 items-end px-10 md:px-20 pt-12 md:pt-16 gap-10 overflow-hidden">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-12 md:pb-16"
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
            <button className="flex items-center justify-center gap-2 bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-md w-full sm:w-auto transition-colors shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
              Shop Now
            </button>

            <button className="flex items-center justify-center gap-2 border-2 border-green-800 text-green-800 hover:bg-green-50 px-6 py-3 rounded-md w-full sm:w-auto transition-colors">
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
                <h2 className="text-xl md:text-2xl font-bold text-green-800">{item.value}</h2>
                <p className="text-gray-500 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE — in flow, bleeds into banner via negative margin */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-end items-end mb-[-4rem]"
        >
          <div
            className="w-full max-w-[45vw] aspect-[7/6] overflow-hidden"
            style={{ borderRadius: "55% 45% 60% 40% / 50% 55% 45% 50%" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/cow.jpg" alt="Cow" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </section>

      {/* BOTTOM BANNER */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-green-800 text-white px-10 md:px-20 pt-16 pb-6 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center text-center md:text-left"
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
