import React from "react";
import { Link } from "react-router-dom";
import { User, Phone } from "lucide-react";

const Navbar = () => {
  const menuItems = [
    { id: 1, title: "Beranda", path: "/" },
    { id: 2, title: "Produk", path: "/product" },
    { id: 3, title: "Keranjang", path: "/cart" },
  ];

  return (
    <nav className="w-full fixed top-0 z-10 bg-white shadow-md">
      <div data-aos="fade-in" className="max-w-[100rem] mx-auto px-6 py-6 grid grid-cols-3 items-center">
        <h1 className="text-3xl font-bold">
          <span className="text-sky-800">Denz</span>Shop
        </h1>
        <ul className="flex justify-center gap-6 items-center">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link to={item.path} className="hover:text-sky-800 font-medium">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-end gap-4 items-center">
          <Link className="hover:text-sky-800" to="/UserProfile">
            <User size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
