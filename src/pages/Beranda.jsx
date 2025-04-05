import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProdukUnggulan from "../components/ProdukUnggulan";
import UnggulanToko from "../components/UnggulanToko";
import Footer from "../components/Footer";

const Beranda = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProdukUnggulan />
      <UnggulanToko />
      <Footer />
    </>
  );
};

export default Beranda;
