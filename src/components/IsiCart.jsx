import React, { useEffect, useState } from "react";

const IsiCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const totalHarga = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Keranjang Belanja</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Keranjang kosong</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between border p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-contain" />
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>
              <p className="text-sky-800 font-bold">${item.price}</p>
            </div>
          ))}
          <div className="text-right mt-4 font-bold text-lg">Total: ${totalHarga.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};

export default IsiCart;
