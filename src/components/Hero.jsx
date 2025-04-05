import React from "react";
import { Link } from "react-router-dom";

const Beranda = () => {
  return (
    <div className="pt-28 px-6">
      {/* Hero Section */}
      <section className="text-center py-16 rounded-xl shadow-sm">
        <h1 className="text-4xl md:text-5xl font-extrabold text-sky-800 mb-4">
          Selamat Datang di DenzShop
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
          Temukan produk terbaik dengan harga terbaik, langsung dari rumahmu.
        </p>
        <Link
          to="/produk"
          className="bg-sky-800 text-white px-8 py-3 rounded-full text-lg hover:bg-sky-700 transition duration-300"
        >
          Lihat Produk
        </Link>
      </section>
    </div>
  );
};

export default Beranda;
