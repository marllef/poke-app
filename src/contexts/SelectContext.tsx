import { createContext, ReactNode, useEffect, useState } from "react";
import {
  PokeAPIPokemon,
  PokeAPIResponse,
  Pokemon,
} from "~/interfaces/PokeAPI/Pokemons";

type ContextType = {
  selected: Pokemon[];
  selectPokemon: { (poke: Pokemon): void };
};

interface Props {
  children: ReactNode;
}

export const SelectContext = createContext<ContextType | null>(null);

export const SelectProvider = ({ children }: Props) => {
  const [selected, setSelected] = useState<Pokemon[]>([]);

  function selectPokemon(pokemon: Pokemon) {
    if (selected.length < 6 && !selected.includes(pokemon)) {
      setSelected((value) => [...value, pokemon]);
    }

    if (selected.includes(pokemon)) {
      setSelected((previous) => previous.filter((poke) => poke.id !== pokemon.id));
    }
  }

  const values: ContextType = {
    selected,
    selectPokemon,
  };

  return (
    <SelectContext.Provider value={values}>{children}</SelectContext.Provider>
  );
};
