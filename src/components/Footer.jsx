import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-800 text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} DenzShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
