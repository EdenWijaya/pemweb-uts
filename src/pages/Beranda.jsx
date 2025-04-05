import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProdukUnggulan from "../components/ProdukUnggulan";
import UnggulanToko from "../components/UnggulanToko";
import Footer from "../components/Footer";

const Beranda = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProdukUnggulan />
      <UnggulanToko />
      <Footer />
    </div>
  );
};

export default Beranda;
