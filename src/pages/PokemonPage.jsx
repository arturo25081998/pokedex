import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../api";

export default function PokemonPage() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getPokemon(name)
      .then((pokemonResponse) => setPokemon(pokemonResponse))
      .catch((error) => console.log("fetch pokemon error :", error));
  }, []);

  if (!pokemon.name) {
    return (
      <main className="w-screen h-screen flex items-center justify-center font-bold text-red-500">
        POKEMON NOT FOUND
      </main>
    );
  }

  return (
    <main className="w-screen h-screen flex items-center justify-center flex-col bg-black p-10">
      <img
        src={pokemon.sprites?.other["official-artwork"].front_default}
        alt={name}
        className="w-128"
      />
      <h1 className=" capitalize first-letter:uppercase text-[3rem] text-yellow-300">
        {name}
      </h1>
      <section className="flex flex-col">
        <span className="text-white">Height : {pokemon.height}</span>
        <span className="text-white">Weight : {pokemon.weight}</span>
      </section>
      <section className="flex flex-row gap-4 pt-3">
        {pokemon.types?.map((type) => {
          return (
            <span
              className="text-white bg-blue-600 p-1 rounded-md"
              key={type.slot}
            >
              {type?.type?.name}
            </span>
          );
        })}
      </section>
    </main>
  );
}
