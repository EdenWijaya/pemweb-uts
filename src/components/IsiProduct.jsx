import React, { useEffect, useState } from "react";

const IsiProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [brandFilter, setBrandFilter] = useState("all");

  // Ambil data dari API (laptop + smartphone)
  useEffect(() => {
    const fetchProducts = async () => {
      const resLaptop = await fetch(
        "https://dummyjson.com/products/category/laptops"
      );
      const resPhone = await fetch(
        "https://dummyjson.com/products/category/smartphones"
      );
      const resMenWatches = await fetch(
        "https://dummyjson.com/products/category/mens-watches"
      );
      const resWomenWatches = await fetch(
        "https://dummyjson.com/products/category/womens-watches"
      );
      const laptopData = await resLaptop.json();
      const phoneData = await resPhone.json();
      const menWatchesData = await resMenWatches.json();
      const womenWatchesData = await resWomenWatches.json();

      const combined = [
        ...laptopData.products,
        ...phoneData.products,
        ...menWatchesData.products,
        ...womenWatchesData.products,
      ];
      setAllProducts(combined);
      setFiltered(combined);
    };
    fetchProducts();
  }, []);

  // Filter produk berdasarkan kategori atau merek
  useEffect(() => {
    let result = [...allProducts];

    if (categoryFilter !== "all") {
      result = result.filter((item) => item.category === categoryFilter);
    }

    if (brandFilter !== "all") {
      result = result.filter((item) => item.brand === brandFilter);
    }

    setFiltered(result);
  }, [categoryFilter, brandFilter, allProducts]);

  // Ambil daftar unik merek
  const uniqueBrands = [...new Set(allProducts.map((item) => item.brand))];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 mt-10">
      {/* Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border px-4 py-2 rounded-md"
        >
          <option value="all">Semua Kategori</option>
          <option value="laptops">Laptop</option>
          <option value="smartphones">Smartphone</option>
          <option value="mens-watches">Jam Tangan Pria</option>
          <option value="womens-watches">Jam Tangan Wanita</option>
        </select>

        <select
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value)}
          className="border px-4 py-2 rounded-md"
        >
          <option value="all">Semua Merek</option>
          {uniqueBrands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-40 w-full object-contain mb-4 rounded-md"
            />
            <h3 className="font-semibold text-md">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{item.brand}</p>
            <p className="text-sky-800 font-bold">${item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IsiProduct;
