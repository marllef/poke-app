/**
 * Implementa um Provider para o contexto de dados (DataContext) que auxilia
 * no gerenciamento de estados entre os componentes da aplicação.
 */

import { createContext, ReactNode, useEffect, useState } from "react";

import {
  PokeAPIPokemon,
  PokeAPIResponse,
  Pokemon,
} from "~/interfaces/PokeAPI/Pokemons";

type ContextType = {
  data: Pokemon[];
  loading: boolean;
  nItems: number;
  next: { (): void };
};

interface Props {
  children: ReactNode;
}

export const PokeDataContext = createContext<ContextType | null>(null);

export const PokemonProvider = ({ children }: Props) => {
  // Definição de estados
  const [data, setData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [pageCount, setPageCount] = useState(1);
  const [nItems, setNItens] = useState(0);

  // Chamada inicial à API.
  useEffect(() => {
    setLoading(true);
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=80")
      .then((response) => response.json())
      .then((ApiRes: PokeAPIResponse) => {
        const pokemons = Promise.all(
          ApiRes.results.map((poke) => fetchPokemon(poke.url))
        );

        pokemons.then((newData) => {
          setData(newData);
        });

        setNextPage(ApiRes.next);
      });
  }, []);

  // chamada à API baseada na paginação.
  useEffect(() => {
    if (nextPage) {
      setLoading(true);
      fetch(nextPage)
        .then((response) => response.json())
        .then((ApiRes: PokeAPIResponse) => {
          setNItens(ApiRes.count);

          const pokemons = Promise.all(
            ApiRes.results.map((poke) => fetchPokemon(poke.url))
          );

          pokemons.then((newData) => {
            setData((prevData) => [...prevData, ...newData]);
          });

          setNextPage(ApiRes.next);
        });
    }
  }, [pageCount]);

  // função auxiliar nas chamadas da API.
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

  // Auxilia na paginação
  const pager = () => {
    setPageCount((value) => value + 1);

    if (data.length === nItems) {
      setLoading(false);
    }
  };

  const values: ContextType = {
    data,
    loading,
    nItems,
    next: pager,
  };
  return (
    <PokeDataContext.Provider value={values}>
      {children}
    </PokeDataContext.Provider>
  );
};
