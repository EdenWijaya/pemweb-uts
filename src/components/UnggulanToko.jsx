import React from "react";
import { ShieldCheck, Truck, BadgePercent } from "lucide-react";

const KeunggulanToko = () => {
  const unggul = [
    {
      id: 1,
      icon: <ShieldCheck size={32} className="text-sky-800" />,
      title: "Aman & Terpercaya",
      desc: "Transaksi dijamin aman dan barang selalu original",
    },
    {
      id: 2,
      icon: <Truck size={32} className="text-sky-800" />,
      title: "Pengiriman Cepat",
      desc: "Pesanan dikirim dalam 24 jam setelah pembayaran",
    },
    {
      id: 3,
      icon: <BadgePercent size={32} className="text-sky-800" />,
      title: "Harga Terbaik",
      desc: "Promo dan diskon menarik setiap hari",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-100 rounded-xl shadow-sm mb-16">
      <h2 className="text-2xl font-bold text-center mb-10">
        Kenapa Pilih Kami?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {unggul.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow text-center"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeunggulanToko;
