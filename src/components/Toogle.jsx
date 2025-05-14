import { motion } from "framer-motion";
import React from "react";

const Toggle = ({ isLogin, setIsLogin }) => {
  return (
    <div className="relative w-64 h-12 bg-gray-200 rounded-full flex items-center px-1 text-sm font-medium shadow-inner">
      {/* Sliding background */}
      <motion.div
        className="absolute w-1/2 h-10 bg-blue-600 rounded-full z-0"
        layout
        initial={false}
        animate={{ x: isLogin ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      {/* Buttons */}
      <button
        onClick={() => setIsLogin(true)}
        className={`z-10 w-1/2 h-full rounded-full transition duration-200 ${isLogin ? "text-white" : "text-gray-700"}`}
      >
        Login
      </button>
      <button
        onClick={() => setIsLogin(false)}
        className={`z-10 w-1/2 h-full rounded-full transition duration-200 ${
          !isLogin ? "text-white" : "text-gray-700"
        }`}
      >
        Register
      </button>
    </div>
  );
};

export default Toggle;
