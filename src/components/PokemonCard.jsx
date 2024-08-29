import { useEffect, useState } from "react";

export default function PokemonCard({ name }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setPokemon(jsonResponse);
      })
      .catch((error) => {
        console.log("fetch pokemon error :", error);
      });
  }, []);

  return (
    <article className="p-6 bg-white rounded-md text-center drop-shadow-lg cursor-pointer transition duration-300 hover:scale-110 hover:text-yellow-300 hover:bg-gray-800">
      <img
        src={pokemon.sprites?.other["official-artwork"].front_default}
        alt=""
        className="w-full"
      />
      <h2 className="mt-2 text-lg font-light">{name}</h2>
    </article>
  );
}
