import { createContext, ReactNode, useEffect, useState } from "react";
import {
  PokeAPIResponse,
  PokeAPIResults,
  Pokemon,
} from "~/interfaces/PokeAPI/Pokemons";

type ContextType = {
  data: PokeAPIResults[];
};

interface Props {
  children: ReactNode;
}

export const PokeDataContext = createContext<ContextType | null>(null);

export const PokemonProvider = ({ children }: Props) => {
  const [data, setData] = useState<PokeAPIResults[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data: PokeAPIResponse) => {
        setData(data.results);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const values = {
    data,
  };
  return (
    <PokeDataContext.Provider value={values}>
      {children}
    </PokeDataContext.Provider>
  );
};
