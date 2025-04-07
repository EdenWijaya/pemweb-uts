import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [form, setForm] = useState({
    nama: "",
    alamat: "",
    kota: "",
    kodePos: "",
    metodePembayaran: "COD",
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const totalHarga = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesanan berhasil diproses");
  };

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto mt-28 p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-sky-800 mb-6">Data Pemesan</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nama"
            placeholder="Nama Lengkap"
            value={form.nama}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2"
          />
          <textarea
            name="alamat"
            placeholder="Alamat Lengkap"
            value={form.alamat}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2"
          />
          <div className="flex gap-4">
            <input
              type="text"
              name="kota"
              placeholder="Kota"
              value={form.kota}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2"
            />
            <input
              type="text"
              name="kodePos"
              placeholder="Kode Pos"
              value={form.kodePos}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <select
            name="metodePembayaran"
            value={form.metodePembayaran}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          >
            <option value="COD">Bayar di Tempat (COD)</option>
            <option value="Transfer">Transfer Bank</option>
            <option value="E-Wallet">E-Wallet</option>
          </select>

          <div className="border-t pt-4 mt-4">
            <h3 className="font-semibold mb-2">Ringkasan Pesanan:</h3>
            {cartItems.map((item, idx) => (
              <div key={idx} className="flex justify-between text-sm mb-1">
                <span>
                  {item.title} x{item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="text-right font-bold mt-2 text-lg">Total: ${totalHarga.toFixed(2)}</div>
          </div>

          <button type="submit" className="w-full bg-sky-800 text-white py-3 rounded-md hover:bg-sky-700">
            Proses Pesanan
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
