import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProdukUnggulan = () => {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/laptops?limit=4")
      .then((res) => res.json())
      .then((data) => setProduk(data.products));
  }, []);

  return (
    <section className="max-w-[100rem] mx-auto px-6 mb-16">
      <h2 data-aos="fade-down" className="text-2xl font-bold my-6 text-center text-sky-800">
        🖥️ Device Unggulan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {produk.map((item) => (
          <div key={item.id} className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition">
            <img src={item.thumbnail} alt={item.title} className="h-40 w-full object-contain mb-4 rounded-md" />
            <h3 className="font-semibold text-md h-auto mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 h-auto">{item.description}</p>
            <p className="text-sky-800 font-bold mt-2">${item.price}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/Product" className="text-sky-800 font-semibold hover:underline">
          Lihat Semua Produk →
        </Link>
      </div>
    </section>
  );
};

export default ProdukUnggulan;
