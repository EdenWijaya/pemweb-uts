// src/components/RegisterForm.jsx
import React from "react";

const RegisterForm = () => {
  return (
    <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-700">Create Account</h2>
      <form className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-600">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-green-300 outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-green-300 outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-green-300 outline-none"
          />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
