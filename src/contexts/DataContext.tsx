import { createContext, ReactNode, useEffect, useState } from "react";
import {
  PokeAPIPokemon,
  PokeAPIResponse,
  PokeAPIResults,
  Pokemon,
} from "~/interfaces/PokeAPI/Pokemons";

type ContextType = {
  data: Pokemon[];
};

interface Props {
  children: ReactNode;
}

export const PokeDataContext = createContext<ContextType | null>(null);

export const PokemonProvider = ({ children }: Props) => {
  const [data, setData] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data: PokeAPIResponse) => {
        const pokemons = Promise.all(
          data.results.map((poke) => fetchPokemon(poke.url))
        );

        pokemons.then((data) => setData(data));
      })
      .catch((err) => console.log(err.message));
  }, []);

  async function fetchPokemon(url: string) {
    const response = await fetch(url);

    const pokemon: PokeAPIPokemon = await response.json();

    return {
      name: pokemon.name,
      id: pokemon.id,
      height: pokemon.height,
      image: pokemon.sprites.other["official-artwork"].front_default,
      types: pokemon.types.map((type) => type.type.name),
    };
  }

  const values = {
    data,
  };
  return (
    <PokeDataContext.Provider value={values}>
      {children}
    </PokeDataContext.Provider>
  );
};
