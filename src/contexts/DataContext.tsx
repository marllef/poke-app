import { createContext, ReactNode, useEffect, useState } from "react";
import {
  PokeAPIPokemon,
  PokeAPIResponse,
  Pokemon,
} from "~/interfaces/PokeAPI/Pokemons";

type ContextType = {
  data: Pokemon[];
  next: { (): void };
  previous: { (): void };
};

interface Props {
  children: ReactNode;
}

export const PokeDataContext = createContext<ContextType | null>(null);

export const PokemonProvider = ({ children }: Props) => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [fetchURL, setFetchURL] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [next, setNext] = useState<string | null>("");
  const [previous, setPrevious] = useState<string | null>("");

  useEffect(() => {
    fetch(fetchURL)
      .then((response) => response.json())
      .then((data: PokeAPIResponse) => {
        setNext(data.next);
        setPrevious(data.previous);
        const pokemons = Promise.all(
          data.results.map((poke) => fetchPokemon(poke.url))
        );

        pokemons.then((data) => setData(data));
      })
      .catch((err) => console.log(err.message));
  }, [fetchURL]);

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

  function nextPage() {
    if (next) {
      setFetchURL(next);
    }
  }

  function previousPage() {
    if (previous) {
      setFetchURL(previous);
    }
  }

  const values: ContextType = {
    data,
    next: nextPage,
    previous: previousPage,
  };
  return (
    <PokeDataContext.Provider value={values}>
      {children}
    </PokeDataContext.Provider>
  );
};
