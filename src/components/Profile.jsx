import React, { useState, useEffect } from "react";

const defaultData = {
  nama: "Eden Wijaya",
  email: "iniemail@gmail.com",
  telepon: "081234567890",
  alamat: "Jl. Kenangan No. 000, Bandung",
  foto: "https://i.pravatar.cc/150?img=12",
};

const Profile = () => {
  const [userData, setUserData] = useState(defaultData);
  const [isEdit, setIsEdit] = useState(false);
  const [form, setForm] = useState(defaultData);

  useEffect(() => {
    const savedData = localStorage.getItem("userProfile");
    if (savedData) {
      setUserData(JSON.parse(savedData));
      setForm(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUserData(form);
    localStorage.setItem("userProfile", JSON.stringify(form));
    setIsEdit(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-28 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-sky-800 mb-6 text-center">Profil Pengguna</h2>
      <div className="flex justify-center mb-6">
        <img
          src={userData.foto}
          alt="Foto Profil"
          className="w-32 h-32 rounded-full border-4 border-sky-800 shadow-md"
        />
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Nama:</label>
          {isEdit ? (
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              className="mt-1 w-full border rounded px-3 py-2"
            />
          ) : (
            <p>{userData.nama}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Email:</label>
          {isEdit ? (
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full border rounded px-3 py-2"
            />
          ) : (
            <p>{userData.email}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Telepon:</label>
          {isEdit ? (
            <input
              type="text"
              name="telepon"
              value={form.telepon}
              onChange={handleChange}
              className="mt-1 w-full border rounded px-3 py-2"
            />
          ) : (
            <p>{userData.telepon}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Alamat:</label>
          {isEdit ? (
            <textarea
              name="alamat"
              value={form.alamat}
              onChange={handleChange}
              className="mt-1 w-full border rounded px-3 py-2"
            />
          ) : (
            <p>{userData.alamat}</p>
          )}
        </div>
      </div>

      <div className="mt-6 text-right">
        {isEdit ? (
          <button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
            Simpan
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="bg-sky-800 hover:bg-sky-700 text-white px-4 py-2 rounded-md"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
