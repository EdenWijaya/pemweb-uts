import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProdukUnggulan = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=2684106f1db8471aa5a4b46d57dcb798&page_size=4")
      .then((res) => res.json())
      .then((data) => setGames(data.results));
  }, []);  

  return (
    <section className="max-w-[100rem] mx-auto px-6 mb-16">
      <h2 className="text-2xl font-bold my-6 text-center text-sky-800">
        🎮 Game Unggulan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <img
              src={game.background_image || "https://via.placeholder.com/300x200?text=No+Image"}
              alt={game.name}
              className="h-40 w-full object-cover mb-4 rounded-md"
            />
            <h3 className="font-semibold text-md line-clamp-2 h-12">
              {game.name}
            </h3>
            <p className="text-sm text-gray-500">Rating: {game.rating}</p>
            <p className="text-sm text-gray-500">
              Platform:{" "}
              {game.platforms
                ?.map((p) => p.platform.name)
                .slice(0, 2)
                .join(", ")}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/produk"
          className="text-sky-800 font-semibold hover:underline"
        >
          Lihat Semua Game →
        </Link>
      </div>
    </section>
  );
};

export default ProdukUnggulan;
