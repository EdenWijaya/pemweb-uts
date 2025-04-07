import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import shoppingAnimation from "../assets/keranjang.json";

const Beranda = () => {
  return (
    <section className="w-full bg-gray-100 py-16 mt-20">
      <div className="max-w-[100rem] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Kiri */}
        <div data-aos="fade-right">
          <h1 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">
            Selamat datang di Denz<span className="text-black">Shop</span>
          </h1>
          <p className="text-gray-700 mb-6">Temukan produk terbaik dengan harga terbaik, langsung dari rumahmu</p>
          <Link
            to="/product"
            className="inline-block bg-sky-800 text-white py-3 px-8 rounded-xl text-lg hover:bg-sky-700 transition duration-300"
          >
            Lihat Produk
          </Link>
        </div>

        {/* Kanan - Animasi */}
        <div className="flex justify-center items-center" data-aos="fade-left">
          <div className="w-full max-w-[350px] h-auto">
            <Lottie animationData={shoppingAnimation} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beranda;
