import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

const IsiProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [brandFilter, setBrandFilter] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      const resLaptop = await fetch("https://dummyjson.com/products/category/laptops");
      const resPhone = await fetch("https://dummyjson.com/products/category/smartphones");
      const resMenWatches = await fetch("https://dummyjson.com/products/category/mens-watches");
      const resWomenWatches = await fetch("https://dummyjson.com/products/category/womens-watches");

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

  const uniqueBrands = [...new Set(allProducts.map((item) => item.brand))];

  const addToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = storedCart.findIndex((i) => i.id === item.id);
    if (itemIndex !== -1) {
      storedCart[itemIndex].quantity += 1;
    } else {
      storedCart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(storedCart));
    alert(`${item.title} telah ditambahkan ke keranjang`);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 mt-10">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="relative border rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between min-h-[320px]"
          >
            <img src={item.thumbnail} alt={item.title} className="h-40 w-full object-contain mb-4 rounded-md" />
            <h3 className="font-semibold text-md mb-2">{item.title}</h3>
            <p className="text-sm text-justify text-gray-500 mb-2">{item.description}</p>
            <p className="text-sm text-gray-500 mb-2">{item.rating} ⭐</p>
            <p className="text-sm text-gray-500 mb-2">
              {item.brand}, Stok {item.stock}
            </p>
            <p className="text-sky-800 font-bold">${item.price}</p>

            <button
              onClick={() => addToCart(item)}
              className="absolute bottom-3 right-3 bg-sky-800 text-white p-2 rounded-full hover:bg-sky-700 transition"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IsiProduct;
