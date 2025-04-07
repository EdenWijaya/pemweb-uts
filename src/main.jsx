import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom"; // ✅ Ganti BrowserRouter jadi HashRouter
import Beranda from "./pages/Beranda";
import Product from "./pages/Product";
import UserProfile from "./pages/UserProfile";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

const MainApp = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/UserProfile" element={<UserProfile />} />
      <Route path="/CheckOut" element={<CheckOut />} />
    </Routes>
  );
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      {" "}
      {/* ✅ Ganti dari BrowserRouter */}
      <MainApp />
    </HashRouter>
  </React.StrictMode>
);
