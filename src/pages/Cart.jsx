import React, { useEffect, useState } from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import Navbar from "../components/Navbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const updateCart = (updated) => {
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const handleRemove = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    updateCart(updatedCart);
  };

  const handleQuantityChange = (index, amount) => {
    const updatedCart = [...cartItems];
    const newQuantity = updatedCart[index].quantity + amount;
    if (newQuantity < 1) return;
    updatedCart[index].quantity = newQuantity;
    updateCart(updatedCart);
  };

  const totalHarga = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12 mt-20">
        <h2 className="text-2xl font-bold mb-6">Keranjang Belanja</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Keranjang kosong</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border p-4 rounded-xl shadow-sm"
              >
                <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-contain rounded-md" />

                <div className="flex-1">
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-500">{item.description}</p>
                  <p className="text-gray-700 font-semibold mt-1">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-2 md:mt-0">
                  <div className="flex items-center border rounded-full px-3 py-1">
                    <button onClick={() => handleQuantityChange(idx, -1)} className="text-gray-600 hover:text-black">
                      <Minus size={16} />
                    </button>
                    <span className="px-3 font-semibold">{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(idx, 1)} className="text-gray-600 hover:text-black">
                      <Plus size={16} />
                    </button>
                  </div>
                  <button onClick={() => handleRemove(idx)} className="text-red-600 hover:text-red-800">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-end items-center gap-6 mt-8">
              <p className="text-xl font-bold text-gray-800">Total: ${totalHarga.toFixed(2)}</p>
              <a href="/checkout" className="bg-sky-800 text-white px-6 py-3 rounded-md hover:bg-sky-700 transition">
                Bayar
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
