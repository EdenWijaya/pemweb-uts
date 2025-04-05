import React from "react";
import { Link } from "react-router-dom";

const Beranda = () => {
  return (
    <>
      <section className="w-full bg-gray-100 py-16 mt-22">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">
            Selamat datang di Denz<span className="text-black">Shop</span>
          </h1>
          <p>
            Temukan produk terbaik dengan harga terjangkau dan kualitas
            terpercaya
          </p>
          <Link to="/product" className="mt-6 inline-block bg-sky-800 text-white py-3 px-8 rounded-full text-lg hover:bg-sky-700 transition duration-300">
            Lihat Produk
          </Link>
        </div>
      </section>
    </>
  );
};

export default Beranda;
