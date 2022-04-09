import { createContext, ReactNode, useState } from "react";
import { Pokemon } from "~/interfaces/PokeAPI/Pokemons";

type ContextType = {
  pokeSelected: Pokemon[];
  selectPokemon: { (poke: Pokemon): void };
  selectedSlot?: Pokemon;
  selectSlot: { (slot?: Pokemon): void };
};

interface Props {
  children: ReactNode;
}

export const SelectContext = createContext<ContextType | null>(null);

export const SelectProvider = ({ children }: Props) => {
  const [pokeSelected, setSelected] = useState<Pokemon[]>([]);

  const [selectedSlot, setSelectedSlot] = useState<Pokemon>();

  function selectPokemon(pokemon: Pokemon) {
    if (pokeSelected.length < 6 && !pokeSelected.includes(pokemon)) {
      setSelected((value) => [...value, pokemon]);
    }

    if (pokeSelected.includes(pokemon)) {
      setSelected((previous) =>
        previous.filter((poke) => poke.id !== pokemon.id)
      );
      setSelectedSlot(undefined);
    }
  }

  const values: ContextType = {
    pokeSelected: pokeSelected,
    selectPokemon,
    selectedSlot: selectedSlot,
    selectSlot: (slot) => setSelectedSlot(slot),
  };

  return (
    <SelectContext.Provider value={values}>{children}</SelectContext.Provider>
  );
};
