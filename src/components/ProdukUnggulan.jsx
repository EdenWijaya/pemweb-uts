import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProdukUnggulan = () => {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => setProduk(data.products));
  }, []);

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Produk Unggulan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {produk.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-40 mx-auto object-contain mb-4"
            />
            <h3 className="font-semibold text-sm line-clamp-2 h-10">
              {item.title}
            </h3>
            <p className="text-sky-800 font-bold mt-2">${item.price}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/Product"
          className="text-sky-800 font-semibold hover:underline"
        >
          Lihat Semua Produk →
        </Link>
      </div>
    </section>
  );
};

export default ProdukUnggulan;
