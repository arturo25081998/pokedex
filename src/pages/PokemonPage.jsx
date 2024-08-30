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
    <main>
      <img
        src={pokemon.sprites?.other["official-artwork"].front_default}
        alt={name}
      />
      <h1>{name}</h1>
      <section className="flex flex-col">
        <span>{pokemon.height}</span>
        <span>{pokemon.weight}</span>
      </section>
      <section>
        {pokemon.types?.map((type) => {
          return <span key={type.slot}>{type?.type?.name}</span>;
        })}
      </section>
    </main>
  );
}
