import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import { getAllPokemons } from "../api";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  /*
  UseEffect recibe dos parametros:
  1. Una funcion
  2. Un array de depencias 
  
  UseEffect se ejecuta en dos ocaciones:
  1. Cuando el componente se monta o renderiza
  2. Cuando alguna de las dependencias cambias

  */

  useEffect(() => {
    getAllPokemons()
      .then((pokemonList) => setPokemons(pokemonList))
      // .then (setPokemons) la funcion then resibe una funcion a la cual le va a pasar la respuesta como parametro
      .catch((error) => console.log("fech pokemons api error :", error));
  }, []);

  return (
    <main className="bg-gray-100">
      <header className="flex flex-row justify-center p-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png"
          alt=""
        />
      </header>
      <section className="p-6 grid min-[320px]:grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.name} name={pokemon.name} />;
        })}
      </section>
    </main>
  );
}
